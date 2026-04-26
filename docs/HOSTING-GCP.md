# Hosting en GCP — Firebase Hosting + custom domain

URL final: **https://unionitaliana12.com.ar**

Stack: Firebase Hosting (parte de GCP). Gratis hasta 10GB transferencia/mes + 360MB storage. Custom domain con HTTPS automático. CDN global.

---

## Setup en 4 pasos (~15 min)

### 1. Comprar el dominio en NIC.ar

`unionitaliana12.com.ar` se compra en https://nic.ar (registrar oficial argentino).

- Requiere **CUIT/CUIL argentino** (vos o la asociación civil de la Logia)
- Costo: ~$X ARS/año (varía cada año, alrededor de $5.000-8.000)
- Login con AFIP (Clave Fiscal nivel 3)
- Reservar el dominio → pagar → confirmación inmediata

Alternativa: si la Logia tiene CUIT propio (asociación civil), registrarlo a nombre de la institución.

### 2. Crear proyecto Firebase

1. Ir a https://console.firebase.google.com
2. **Add project** → nombre `union-italiana-12` (o similar)
3. Optional: deshabilitar Google Analytics (no lo necesitamos)
4. Click **Create project** → ~30s
5. En sidebar izquierdo → **Build** → **Hosting** → **Get started**
6. Copiar el **Project ID** (aparece arriba). Va a ser algo como `union-italiana-12-abc12`

### 3. Configurar local

En tu terminal:

```sh
# Instalar Firebase CLI (una vez)
npm install -g firebase-tools

# Login
firebase login
# Abre browser, autoriza con tu cuenta Google

# Conectar el repo al proyecto
cd ~/projects/union-italiana-12
firebase use REPLACE_CON_TU_PROJECT_ID
```

O editar `.firebaserc` directo:

```json
{
  "projects": {
    "default": "TU_PROJECT_ID_REAL"
  }
}
```

### 4. Primer deploy

```sh
cd ~/projects/union-italiana-12
pnpm deploy:firebase
```

Esto hace:
1. Build con `DEPLOY_TARGET=firebase` (sin base path, output `dist/`)
2. `firebase deploy --only hosting`

~30s después → sitio live en `https://TU_PROJECT_ID.web.app` y `https://TU_PROJECT_ID.firebaseapp.com`.

### 5. Conectar custom domain `unionitaliana12.com.ar`

En Firebase Console del proyecto:

1. **Hosting** → **Add custom domain**
2. Tipear `unionitaliana12.com.ar` → **Continue**
3. Firebase te muestra **2 registros DNS** que tenés que configurar (tipo A o TXT para verificación + A records para hosting)

Ejemplo típico de registros que pide:

```
TXT  unionitaliana12.com.ar  google-site-verification=ABC123XYZ
A    unionitaliana12.com.ar  151.101.X.X
A    unionitaliana12.com.ar  151.101.Y.Y
```

(Los IPs reales los da Firebase en ese momento.)

### 6. Configurar DNS en NIC.ar

NIC.ar tiene una interfaz un poco anticuada. Pasos:

1. Login en https://nic.ar con tu Clave Fiscal AFIP
2. **Mis dominios** → click `unionitaliana12.com.ar`
3. **Delegaciones / DNS**
4. Opciones:
   - **Opción A:** Usar los DNS gratuitos de NIC.ar y agregar registros A/TXT manualmente.
   - **Opción B (recomendada):** Delegar a **Cloudflare DNS** (gratis, mejor UX).

#### Opción B (Cloudflare DNS, recomendado)

1. Crear cuenta gratis en https://cloudflare.com
2. **Add a site** → tipear `unionitaliana12.com.ar` → Free plan
3. Cloudflare te da 2 nameservers (ej: `nina.ns.cloudflare.com`, `walt.ns.cloudflare.com`)
4. En NIC.ar → **Delegaciones** → cambiar nameservers a los de Cloudflare
5. Esperar propagación (15min - 24h)
6. En Cloudflare DNS, agregar los registros A y TXT que Firebase pidió en paso 5
7. **DNS Management** en Cloudflare: poner los registros con **Proxy status: DNS only** (gris, no naranja) — Firebase maneja su propio CDN

#### Opción A (NIC.ar directo)

1. En **Delegaciones** → **DNS** → agregar:
   - `TXT @` con valor de verificación de Google
   - `A @` con IP que Firebase te dio (puede ser 1 o 2 IPs)
2. Guardar. Propagación ~15-60 min.

### 7. Verificar

Volver a Firebase Console → Hosting → tu dominio → **Verify**.

Firebase chequea los registros DNS. Si están bien:
- Estado pasa a **Connecting…** (genera certificado SSL automático con Let's Encrypt)
- Después de ~30 min: **Connected** ✓
- Sitio live en `https://unionitaliana12.com.ar` con HTTPS

### 8. Configurar redirect www → apex (opcional)

Si querés que `https://www.unionitaliana12.com.ar` también funcione:
1. En Firebase → Hosting → **Add custom domain** → `www.unionitaliana12.com.ar`
2. Marcá redirect → apex (sin www)
3. Firebase pide otro registro DNS, agregar en Cloudflare/NIC.ar

---

## Deploys siguientes

```sh
cd ~/projects/union-italiana-12
pnpm deploy:firebase
```

~30s. Listo.

---

## Migración GH Pages → Firebase

Durante la transición tenés ambos hostings:
- **GH Pages** (actual): https://pelasonny-stack.github.io/union-italiana-12/
- **Firebase**: https://unionitaliana12.com.ar

Cuando confirmes que Firebase funciona perfecto:

1. **Settings** del repo en GitHub → **Pages** → cambiar Source a **None** → desactiva GH Pages
2. Eliminar carpeta `docs/` del repo (output GH Pages, ya no se usa)
3. Update README + sitemap + JsonLd para apuntar al nuevo dominio

---

## Costos esperados

- **NIC.ar**: ~$5.000-8.000 ARS/año por dominio
- **Firebase Hosting**: $0 mientras estés bajo 10GB transferencia/mes (suficiente para sitio de la Logia con tráfico moderado)
- **Cloudflare DNS** (si usás opción B): $0 plan free
- **Total**: solo el dominio anual

Si el tráfico explota (>10GB/mes), Firebase pasa a Blaze plan ($0.15/GB transferencia adicional). Improbable para sitio institucional.

---

## Troubleshooting

### "DNS verification failed"
Esperá más. La propagación puede tardar 24h en peor caso. Verificá con `dig unionitaliana12.com.ar` desde tu terminal.

### "Mixed content errors"
Asegurate de que todos los assets en el sitio usan paths relativos o `https://`. Check `pnpm build:firebase` output.

### "Certificate not provisioning"
Borrar el dominio en Firebase Console y volver a agregarlo. A veces se queda colgado.

### Volver a GH Pages temporalmente
```sh
pnpm build  # genera docs/ con base /union-italiana-12
git add docs && git commit -m "rollback to GH Pages" && git push
```

---

## Email institucional con custom domain

Si querés `info@unionitaliana12.com.ar` o similar:
- **Google Workspace**: $6/usuario/mes — gestionás desde GCP, integra con Firebase auth si en futuro hace falta
- **Zoho Mail**: gratis hasta 5 usuarios — más simple
- **Cloudflare Email Routing**: gratis, redirige a Gmail externo (`info@unionitaliana12.com.ar` → `unionitaliana12@gmail.com`)

Recomendado para empezar: **Cloudflare Email Routing** — sin costo, sin app web, todos los emails llegan a tu Gmail.
