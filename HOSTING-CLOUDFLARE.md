# Hosting en Cloudflare — todo en CF

URL final: **https://logiaunionitaliana12.com.ar**

Stack: Cloudflare Pages (hosting) + Cloudflare DNS + Cloudflare Email Routing + Cloudflare Workers (petition-handler ya armado).

Costo total: **$0/mes**. Ningún componente requiere tarjeta.

---

## Setup en orden — 8 pasos

### 1. Crear cuenta Cloudflare

1. https://dash.cloudflare.com/sign-up
2. Email + password → confirmar email
3. **NO te pide tarjeta** en este paso ni después si te quedás en plan Free.

### 2. Add a Site (DNS)

1. Dashboard CF → **Add a site** (botón arriba)
2. Tipear `logiaunionitaliana12.com.ar` → Continue
3. **Selección de plan**: bajá hasta encontrar **Free $0** y click. NO selecciones Pro/Business.
4. CF intenta escanear DNS — no hay nada → continue
5. Te muestra **2 nameservers** propios:
   ```
   ej:  nina.ns.cloudflare.com
        walt.ns.cloudflare.com
   ```
   (Los nombres exactos varían — anotalos.)

### 3. Cargar nameservers en NIC.ar

NIC.ar → tu dominio → **Delegaciones** → **Agregar nueva delegación**:

**Primer NS:**
- Host: `nina.ns.cloudflare.com` (sin punto al final)
- IPv4: vacío
- IPv6: vacío
- Guardar

**Segundo NS:**
- Host: `walt.ns.cloudflare.com`
- IPv4: vacío
- IPv6: vacío
- Guardar

Te quedan 2 delegaciones cargadas.

### 4. Esperar propagación

15min - 24h, normalmente <2h en .com.ar.

Verificá:
```sh
dig NS logiaunionitaliana12.com.ar +short
```
Cuando muestre los `*.ns.cloudflare.com` → propagado. Cloudflare te llega un email "your site is now active".

### 5. Crear el sitio en Cloudflare Pages

1. Dashboard CF → sidebar **Workers & Pages** → **Create**
2. Tab **Pages** → **Connect to Git**
3. Connect GitHub → autorizá CF acceso al repo `pelasonny-stack/union-italiana-12`
4. Seleccioná el repo
5. Configuración build:
   - **Project name**: `logiaunionitaliana12` (o lo que quieras — afecta URL temporal `*.pages.dev`)
   - **Production branch**: `main`
   - **Framework preset**: **Astro**
   - **Build command**: `pnpm build:cloudflare`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Environment variables**:
     - `NODE_VERSION` = `22`
     - `PNPM_VERSION` = `10`
6. **Save and Deploy**
7. Esperá ~2-3 min → primer build OK → URL temporal: `https://logiaunionitaliana12.pages.dev`

### 6. Conectar custom domain

CF Pages → tu proyecto → **Custom domains** → **Set up a custom domain**:

1. Tipear `logiaunionitaliana12.com.ar` → Continue
2. CF detecta que el dominio ya está en tu cuenta CF (porque lo agregaste en paso 2) → **1 click setup**, NO requiere agregar registros DNS manualmente
3. Activate domain → SSL automático ~30s
4. Listo — sitio live en `https://logiaunionitaliana12.com.ar`

(Si querés que `www.logiaunionitaliana12.com.ar` también funcione, repetí el proceso con ese subdominio → CF crea redirect automático.)

### 7. Email Routing — `info@logiaunionitaliana12.com.ar` → Gmail

Gratis e ilimitado.

1. Dashboard CF → tu dominio → **Email** → **Email Routing** → **Get started**
2. CF crea registros MX automáticos en tu DNS (no tenés que tocar nada)
3. Verificás tu Gmail destino (te llega mail con código)
4. **Routing rules** → **Create address**:
   - Custom address: `info` (resulta en `info@logiaunionitaliana12.com.ar`)
   - Action: Send to → tu Gmail
   - Save
5. Probá: mandate un mail a `info@logiaunionitaliana12.com.ar` desde otro mail → llega a tu Gmail

Repetí para más alias: `contacto@`, `peticiones@`, `secretario@`, etc.

### 8. (Opcional) Worker petition-handler

El form Atrio del Peticionario tiene un Worker ya armado en `workers/petition-handler/`. Para activarlo:

```sh
cd ~/projects/union-italiana-12/workers/petition-handler
pnpm exec wrangler login                        # primera vez, abre browser
pnpm exec wrangler kv namespace create RATE_LIMIT
pnpm exec wrangler kv namespace create DEDUP
pnpm exec wrangler r2 bucket create union12-petitions
# Copiar los IDs devueltos en wrangler.toml (descomentar líneas)

# Secrets
echo "tu_turnstile_secret" | pnpm exec wrangler secret put TURNSTILE_SECRET_KEY
echo "tu_resend_api_key"   | pnpm exec wrangler secret put RESEND_API_KEY
openssl rand -base64 32 | pnpm exec wrangler secret put INTERNAL_WORKER_TOKEN
openssl rand -base64 32 | pnpm exec wrangler secret put PETITION_ENCRYPTION_KEY
echo "venerable@logiaunionitaliana12.com.ar" | pnpm exec wrangler secret put VENERABLE_EMAIL
echo "secretario@logiaunionitaliana12.com.ar" | pnpm exec wrangler secret put SECRETARY_EMAIL
echo "investigadores@logiaunionitaliana12.com.ar" | pnpm exec wrangler secret put INVESTIGATORS_EMAIL
echo "peticiones@logiaunionitaliana12.com.ar" | pnpm exec wrangler secret put FROM_EMAIL

pnpm exec wrangler deploy
```

Custom domain del Worker: `forms.logiaunionitaliana12.com.ar` (configurable desde CF Workers dashboard).

Esto activa el form de iniciación. Si por ahora no necesitás recibir peticiones online, podés skippearlo.

---

## Deploys siguientes

Hacés cambios al código:

```sh
git add . && git commit -m "..." && git push
```

CF Pages **detecta el push automáticamente** y hace rebuild + deploy en ~2 min. No hace falta correr nada local.

---

## Costos detallados

| Componente | Costo | Free tier |
|---|---|---|
| CF Pages | $0 | unlimited bandwidth, 500 builds/mes, 100 custom domains |
| CF DNS | $0 | unlimited queries |
| CF Email Routing | $0 | unlimited destinations + reglas |
| CF Workers | $0 | 100k req/día (peticionario casi imposible exceder) |
| CF SSL | $0 | universal cert auto-renewable |
| **Total** | **$0** | |

Si en algún momento excedés Workers free tier (100k req/día), pasa a Workers Paid $5/mes.

---

## Troubleshooting

### "Pending nameserver update" en CF
NIC.ar todavía no propagó. Esperar más. Podés re-disparar la verificación con CF dashboard → tu dominio → **Re-check now**.

### Build falla en CF Pages
Verificar que `NODE_VERSION=22` esté en env vars. CF default es Node 18 que no soporta algunas deps.

### Custom domain "Pending Validation"
1-15 min normalmente. Si tarda más, click el dominio → **Re-check**.

### "Mixed content" warnings
Asegurar que todos los assets en código usan `https://` o paths relativos. Verificá `pnpm build:cloudflare` output.

---

## Ventajas vs alternativas

- **vs Hostinger**: $0 vs $4/mes, edge de CF en BA (10ms) vs DC en BR/EU (80ms), auto-deploy git nativo
- **vs Firebase**: bandwidth ilimitado vs 10GB/mes, custom domain con 1 click si DNS en CF, Email Routing incluido
- **vs GH Pages**: custom domain trivial, sin base path, builds más rápidos

Stack todo-CF es la opción objetivamente óptima para un sitio estático Astro + Worker.
