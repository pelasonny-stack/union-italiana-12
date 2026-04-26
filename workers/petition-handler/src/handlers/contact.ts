import { ulid } from "ulid";
import { ContactSchema } from "@union12/shared/schemas/contact";
import type { Env } from "../types";
import { verifyTurnstile } from "../lib/turnstile";
import { checkRateLimit } from "../lib/ratelimit";
import { sendEmail } from "../lib/email";

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
  req.headers.get("cf-connecting-ip") ?? "0.0.0.0";

const subjectRoute = (env: Env, subject: string): string => {
  switch (subject) {
    case "academia":
      return env.SECRETARY_EMAIL;
    case "hermano-visitante":
      return env.VENERABLE_EMAIL;
    default:
      return env.SECRETARY_EMAIL;
  }
};

export async function handleContact(
  request: Request,
  env: Env,
  _ctx: ExecutionContext,
  origin: string,
): Promise<Response> {
  const remoteIp = ip(request);

  const rh = await checkRateLimit(env.RATE_LIMIT, remoteIp, "hour", 5);
  if (!rh.allowed) return json({ ok: false, error: "rate_limited" }, 429, origin);

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) return json({ ok: false, error: "invalid_data" }, 400, origin);
  const c = parsed.data;

  if (c.honeypot.length > 0) return json({ ok: true }, 200, origin);
  const elapsed = Date.now() - c.formStartedAt;
  if (elapsed < 3000) return json({ ok: false, error: "timing_invalid" }, 400, origin);

  const tsOk = await verifyTurnstile(
    c.turnstileToken,
    env.TURNSTILE_SECRET_KEY,
    remoteIp,
  );
  if (!tsOk) return json({ ok: false, error: "turnstile_failed" }, 400, origin);

  const id = ulid();
  const text = `[Contacto · ${c.subject}]\nDe: ${c.name} <${c.email}>\nIdioma: ${c.preferredLanguage}\nID: ${id}\n\n${c.message}`;

  const result = await sendEmail(env.RESEND_API_KEY, {
    from: env.FROM_EMAIL,
    to: [subjectRoute(env, c.subject)],
    subject: `[Contacto · ${c.subject}] ${c.name}`,
    html: `<pre style="font-family:'Inter',sans-serif;white-space:pre-wrap">${text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</pre>`,
    text,
    reply_to: c.email,
  });

  if (!result.ok) return json({ ok: false, error: "delivery_failed" }, 502, origin);
  return json({ ok: true }, 200, origin);
}
