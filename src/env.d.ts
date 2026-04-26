/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly PUBLIC_TURNSTILE_SITEKEY: string;
  readonly PUBLIC_PETITION_WORKER_URL: string;
  readonly INTERNAL_WORKER_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
