/**
 * AES-GCM encrypt/decrypt para PII en R2.
 * Clave provista en base64 (32 bytes = 256 bits).
 * Ciphertext format: base64(iv|ciphertext|tag) — iv 12 bytes al inicio.
 */

const fromB64 = (s: string): Uint8Array =>
  Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

const toB64 = (buf: ArrayBuffer): string => {
  const bytes = new Uint8Array(buf);
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
};

async function importKey(rawB64: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    fromB64(rawB64),
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encryptJson(
  data: unknown,
  rawKeyB64: string,
): Promise<string> {
  const key = await importKey(rawKeyB64);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(data));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    plaintext,
  );
  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);
  return toB64(combined.buffer);
}

export async function decryptJson<T>(
  payloadB64: string,
  rawKeyB64: string,
): Promise<T> {
  const key = await importKey(rawKeyB64);
  const combined = fromB64(payloadB64);
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    ciphertext,
  );
  return JSON.parse(new TextDecoder().decode(plaintext)) as T;
}
