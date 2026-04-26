# Deployment — Unión Italiana N°12

## Componentes a desplegar

1. **Sitio Astro** → Cloudflare Pages
2. **Worker `petition-handler`** → Cloudflare Workers (subdominio `forms.unionitaliana12.org.ar`)

---

## 1. Cloudflare Pages (sitio Astro)

### Setup inicial (una sola vez)

1. Subir el repo a GitHub (privado o público).
2. En el dashboard de Cloudflare → Workers & Pages → Create → Connect to Git.
3. Seleccionar el repo. Build config:
   - **Build command**: `pnpm install --frozen-lockfile && pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (no cambiar)
   - **Node version**: `22` (variable `NODE_VERSION=22`)
4. Variables de entorno (en el dashboard):
   - `NODE_VERSION` = `22`
   - `PUBLIC_TURNSTILE_SITEKEY` = sitekey real de Turnstile
   - `PUBLIC_PETITION_WORKER_URL` = `https://forms.unionitaliana12.org.ar`
5. Custom domain: `unionitaliana12.org.ar` y `www.unionitaliana12.org.ar` (con redirect a apex).

### Deploys posteriores

Push a `main` → CF Pages despliega automáticamente. Cada PR tiene preview deploy en `https://<sha>.union-italiana-12.pages.dev`.

---

## 2. Worker — petition-handler

### Recursos a crear (una sola vez)

```sh
cd workers/petition-handler

# KV para rate limit y dedup
pnpm exec wrangler kv namespace create RATE_LIMIT
pnpm exec wrangler kv namespace create DEDUP

# R2 para almacenamiento cifrado de peticiones
pnpm exec wrangler r2 bucket create union12-petitions
```

Pegar los IDs devueltos en `wrangler.toml` (descomentar las secciones `kv_namespaces` y `r2_buckets`).

### Secrets

```sh
# Turnstile (panel Cloudflare → Turnstile → Add site)
pnpm exec wrangler secret put TURNSTILE_SECRET_KEY

# Resend (resend.com → API keys)
pnpm exec wrangler secret put RESEND_API_KEY

# Token compartido entre Pages y Worker (generar 32 bytes random base64)
openssl rand -base64 32 | pnpm exec wrangler secret put INTERNAL_WORKER_TOKEN

# Clave de cifrado AES-GCM (32 bytes base64)
openssl rand -base64 32 | pnpm exec wrangler secret put PETITION_ENCRYPTION_KEY

# Direcciones de email
pnpm exec wrangler secret put VENERABLE_EMAIL          # ej: venerable@unionitaliana12.org.ar
pnpm exec wrangler secret put SECRETARY_EMAIL          # ej: secretario@unionitaliana12.org.ar
pnpm exec wrangler secret put INVESTIGATORS_EMAIL      # ej: investigadores@unionitaliana12.org.ar (puede ser CSV)
pnpm exec wrangler secret put FROM_EMAIL               # ej: peticiones@unionitaliana12.org.ar
```

El mismo `INTERNAL_WORKER_TOKEN` debe configurarse como variable en CF Pages para que el sitio pueda autenticar requests al Worker.

### Deploy

```sh
pnpm worker:deploy
```

O vía GitHub Actions: push a `main` con cambios en `workers/petition-handler/**` dispara el workflow `deploy-worker.yml`. Requiere los secrets de GH Actions:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Custom domain del Worker

En CF Workers → petition-handler → Triggers → Custom Domains:
- Agregar `forms.unionitaliana12.org.ar`.

### Email — DKIM / SPF / DMARC

En el DNS del dominio `unionitaliana12.org.ar`:

```
TXT @       v=spf1 include:resend.com -all
TXT _dmarc  v=DMARC1; p=reject; rua=mailto:dmarc@unionitaliana12.org.ar
TXT resend._domainkey.unionitaliana12.org.ar  (valor que da Resend)
```

Verificar el dominio en el dashboard de Resend antes de enviar.

---

## 3. Smoke tests post-deploy

```sh
# Sitio
curl -I https://unionitaliana12.org.ar/                    # 302 → /es/
curl -I https://unionitaliana12.org.ar/es/                 # 200 + headers CSP/HSTS
curl -I https://unionitaliana12.org.ar/it/                 # 200

# Worker — método incorrecto
curl -I https://forms.unionitaliana12.org.ar/petition      # 405

# Worker — origen inválido
curl -X POST https://forms.unionitaliana12.org.ar/petition \
  -H "origin: https://evil.example" \
  -H "content-type: application/json" \
  -d '{}'                                                   # 403
```

---

## 4. Decisiones diferidas (bloquean phases 4 y 6 de funcionalidad completa)

Ver `/Users/gcardarelli/.claude/plans/virtual-skipping-manatee.md` sección "Decisiones diferidas". Las páginas marcadas con `<Stub>` reflejan información pendiente de confirmación con el Venerable Maestro.
