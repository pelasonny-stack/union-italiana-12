import { ulid } from "ulid";
import { PetitionSchema, type PetitionInput } from "@union12/shared/schemas/petition";
import type { Env } from "../types";
import { verifyTurnstile } from "../lib/turnstile";
import { checkRateLimit } from "../lib/ratelimit";
import { sendEmail } from "../lib/email";
import { encryptJson } from "../lib/encrypt";

const json = (
  body: Record<string, unknown>,
  status: number,
  origin: string,
): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": origin,
      vary: "origin",
    },
  });

const ip = (req: Request): string =>
  req.headers.get("cf-connecting-ip") ??
  req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  "0.0.0.0";

const formatPetitionEmail = (p: PetitionInput, id: string): { html: string; text: string } => {
  const lines: string[] = [
    `Petición de iniciación — ${id}`,
    `Recibida: ${new Date().toISOString()}`,
    "",
    `Nombre: ${p.firstName} ${p.lastName}`,
    `Nacimiento: ${p.dateOfBirth}  ·  Nacionalidad: ${p.nationality}`,
    `Documento (${p.documentType}): ${p.documentNumber}`,
    `Domicilio: ${p.address}, ${p.city}, ${p.province}, ${p.country}`,
    `Tel: ${p.phone}  ·  Email: ${p.email}`,
    p.maritalStatus ? `Estado civil: ${p.maritalStatus}` : "",
    `Profesión: ${p.occupation}`,
    p.education ? `Estudios: ${p.education}` : "",
    "",
    "── Reflexión ──",
    `Posición religiosa/filosófica:\n${p.religiousPosition}`,
    "",
    `Cómo conoció la masonería:\n${p.howKnownMasonry}`,
    "",
    `Por qué peticiona:\n${p.whyPetition}`,
    "",
    `Por qué esta Logia:\n${p.whyThisLodge}`,
    "",
    "── Referencias ──",
    p.knownBrothers ? `Hermanos conocidos: ${p.knownBrothers}` : "",
    `Referencia 1: ${p.reference1Name} — ${p.reference1Contact}`,
    `Referencia 2: ${p.reference2Name} — ${p.reference2Contact}`,
    p.otherInitiaticOrders ? `Otras órdenes: ${p.otherInitiaticOrders}` : "",
    "",
    "── Antecedentes ──",
    `Penales: ${p.criminalRecord}${p.criminalRecordDetail ? " — " + p.criminalRecordDetail : ""}`,
    `Disponibilidad: ${p.availability.join(", ")}`,
    `Aporte: ${p.contributionRange}`,
    "",
    p.freeComment ? `Comentario:\n${p.freeComment}` : "",
    "",
    `Idioma preferido del peticionario: ${p.preferredLanguage}`,
  ].filter(Boolean);

  const text = lines.join("\n");
  const html = `<pre style="font-family:'Inter',sans-serif;white-space:pre-wrap;line-height:1.6;color:#0B0B0F">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;
  return { html, text };
};

const acuseHtml = (p: PetitionInput): string => {
  const isIt = p.preferredLanguage === "it";
  return isIt
    ? `<p>Abbiamo ricevuto la sua petizione. La sua richiesta sarà presentata alla prossima tornata regolare della Loggia, dove verrà letta dal Maestro Venerabile e registrata. Nelle settimane successive, tre fratelli investigatori saranno designati; uno di essi la contatterà per fissare il primo colloquio.</p><p>Se trascorrono più di sei settimane senza notizie, può scriverci a peticiones@unionitaliana12.org.ar — i processi dell'Ordine sono lenti per disegno, ma non opachi.</p><p>Riceva, con queste righe, il rispettoso saluto della Loggia.</p>`
    : `<p>Hemos recibido su petición. Su petición ingresará a la próxima reunión de tenida regular de la Logia, donde será leída por el Venerable Maestro y registrada. En las semanas siguientes, tres hermanos investigadores serán designados; uno de ellos se pondrá en contacto con usted para concertar la primera entrevista.</p><p>Si transcurren más de seis semanas sin novedad, puede escribirnos a peticiones@unionitaliana12.org.ar — los procesos de la Orden son pausados por diseño, pero no opacos.</p><p>Reciba, con esta línea, el saludo respetuoso de la Logia.</p>`;
};

export async function handlePetition(
  request: Request,
  env: Env,
  _ctx: ExecutionContext,
  origin: string,
): Promise<Response> {
  const remoteIp = ip(request);

  // Rate limit
  const hourLimit = Number.parseInt(env.RATE_LIMIT_PER_HOUR, 10) || 3;
  const dayLimit = Number.parseInt(env.RATE_LIMIT_PER_DAY, 10) || 10;
  const rh = await checkRateLimit(env.RATE_LIMIT, remoteIp, "hour", hourLimit);
  if (!rh.allowed) return json({ ok: false, error: "rate_limited" }, 429, origin);
  const rd = await checkRateLimit(env.RATE_LIMIT, remoteIp, "day", dayLimit);
  if (!rd.allowed) return json({ ok: false, error: "rate_limited" }, 429, origin);

  // Parse + validate
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }

  const parsed = PetitionSchema.safeParse(raw);
  if (!parsed.success) {
    return json({ ok: false, error: "invalid_data" }, 400, origin);
  }
  const p = parsed.data;

  // Anti-bot: honeypot + min time-to-submit
  if (p.honeypot.length > 0) {
    // Silencioso — devolvemos 200 fake para no alertar al bot
    return json({ ok: true, petitionId: ulid() }, 200, origin);
  }
  const elapsed = Date.now() - p.formStartedAt;
  if (elapsed < 5000 || elapsed > 1000 * 60 * 60 * 4) {
    return json({ ok: false, error: "timing_invalid" }, 400, origin);
  }

  // Turnstile
  const tsOk = await verifyTurnstile(
    p.turnstileToken,
    env.TURNSTILE_SECRET_KEY,
    remoteIp,
  );
  if (!tsOk) return json({ ok: false, error: "turnstile_failed" }, 400, origin);

  // ID + storage cifrado
  const petitionId = ulid();
  if (env.PETITIONS && env.PETITION_ENCRYPTION_KEY) {
    const ciphertext = await encryptJson(
      { ...p, petitionId, receivedAt: new Date().toISOString(), ip: remoteIp },
      env.PETITION_ENCRYPTION_KEY,
    );
    await env.PETITIONS.put(`petitions/${petitionId}.enc`, ciphertext, {
      httpMetadata: { contentType: "application/octet-stream" },
    });
  }

  // Email a la Logia
  const { html, text } = formatPetitionEmail(p, petitionId);
  const recipients = [
    env.VENERABLE_EMAIL,
    env.SECRETARY_EMAIL,
    ...env.INVESTIGATORS_EMAIL.split(",").map((s) => s.trim()).filter(Boolean),
  ];

  const lodgeMail = await sendEmail(env.RESEND_API_KEY, {
    from: env.FROM_EMAIL,
    to: recipients,
    subject: `[Petición de Iniciación] ${p.firstName} ${p.lastName} — ${petitionId}`,
    html,
    text,
    reply_to: p.email,
  });

  // Acuse al peticionario (no bloqueante en caso de fallo)
  await sendEmail(env.RESEND_API_KEY, {
    from: env.FROM_EMAIL,
    to: [p.email],
    subject:
      p.preferredLanguage === "it"
        ? "Abbiamo ricevuto la sua petizione"
        : "Hemos recibido su petición",
    html: acuseHtml(p),
    text:
      p.preferredLanguage === "it"
        ? "Abbiamo ricevuto la sua petizione. La contatteremo nelle prossime settimane."
        : "Hemos recibido su petición. Lo contactaremos en las próximas semanas.",
  });

  if (!lodgeMail.ok) {
    console.error("lodge_email_failed", { petitionId, error: lodgeMail.error });
    return json({ ok: false, error: "delivery_failed" }, 502, origin);
  }

  return json({ ok: true, petitionId }, 200, origin);
}
