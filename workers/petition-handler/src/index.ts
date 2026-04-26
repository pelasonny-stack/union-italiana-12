import type { Env } from "./types";
import { handlePetition } from "./handlers/petition";
import { handleContact } from "./handlers/contact";

const json = (
  body: Record<string, unknown>,
  status = 200,
  origin?: string,
): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(origin ? { "access-control-allow-origin": origin } : {}),
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type, x-internal-token",
      "access-control-max-age": "86400",
      vary: "origin",
    },
  });

const allowed = (env: Env, origin: string | null) => {
  if (!origin) return false;
  const list = env.ALLOWED_ORIGINS.split(",").map((s) => s.trim());
  return list.includes(origin);
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    const origin = request.headers.get("origin");

    if (request.method === "OPTIONS") {
      return json({ ok: true }, 204, allowed(env, origin) ? origin! : undefined);
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405);
    }

    if (!allowed(env, origin)) {
      return json({ ok: false, error: "origin_forbidden" }, 403);
    }

    if (request.headers.get("x-internal-token") !== env.INTERNAL_WORKER_TOKEN) {
      return json({ ok: false, error: "unauthorized" }, 401, origin!);
    }

    try {
      switch (url.pathname) {
        case "/petition":
          return await handlePetition(request, env, ctx, origin!);
        case "/contact":
          return await handleContact(request, env, ctx, origin!);
        default:
          return json({ ok: false, error: "not_found" }, 404, origin!);
      }
    } catch (err) {
      // No filtra detalles internos al cliente
      console.error("worker_error", { path: url.pathname, err: String(err) });
      return json({ ok: false, error: "internal_error" }, 500, origin!);
    }
  },
} satisfies ExportedHandler<Env>;
