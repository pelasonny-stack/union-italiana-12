/**
 * Rate limit por IP basado en KV.
 * Sin KV (entorno local sin binding), retorna allow=true (modo dev).
 * Estructura KV: clave `rl:${scope}:${ip}` → contador, TTL en segundos.
 */
export async function checkRateLimit(
  kv: KVNamespace | undefined,
  ip: string,
  scope: "hour" | "day",
  limit: number,
): Promise<{ allowed: boolean; remaining: number }> {
  if (!kv) return { allowed: true, remaining: limit };

  const ttl = scope === "hour" ? 3600 : 86400;
  const key = `rl:${scope}:${ip}`;
  const current = (await kv.get(key)) ?? "0";
  const count = Number.parseInt(current, 10) || 0;

  if (count >= limit) return { allowed: false, remaining: 0 };

  await kv.put(key, String(count + 1), { expirationTtl: ttl });
  return { allowed: true, remaining: limit - count - 1 };
}
