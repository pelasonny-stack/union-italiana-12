export interface Env {
  // Vars
  ALLOWED_ORIGINS: string;
  RATE_LIMIT_PER_HOUR: string;
  RATE_LIMIT_PER_DAY: string;

  // Secrets
  INTERNAL_WORKER_TOKEN: string;
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  PETITION_ENCRYPTION_KEY: string;
  VENERABLE_EMAIL: string;
  SECRETARY_EMAIL: string;
  INVESTIGATORS_EMAIL: string;
  FROM_EMAIL: string;

  // Bindings (descomentar cuando se creen los recursos en CF)
  RATE_LIMIT?: KVNamespace;
  DEDUP?: KVNamespace;
  PETITIONS?: R2Bucket;
}

export type JsonResponse = {
  ok: boolean;
  petitionId?: string;
  error?: string;
};
