# Hosting GCP — Firebase Hosting + logiaunionitaliana12.com.ar

URL final: **https://logiaunionitaliana12.com.ar**

Stack: Firebase Hosting (parte de GCP). Gratis hasta 10GB transferencia/mes.
Custom domain con HTTPS automático (Let's Encrypt). CDN global incluido.

---

## ¿Hacen falta los DNS?

**Sí, hacen falta.** Sin DNS, tipear `logiaunionitaliana12.com.ar` en un browser no te lleva a ningún lado — el dominio existe pero no apunta a ningún servidor.

Los registros DNS le dicen al mundo "este dominio se resuelve en este servidor de Firebase".

---

## Setup completo en orden

### 1. Crear proyecto Firebase

1. Ir a https://console.firebase.google.com
2. **Add project** → nombre: `union-italiana-12` (lo que quieras)
3. Disable Google Analytics (no lo necesitamos)
4. Sidebar → **Build** → **Hosting** → **Get started**
5. Copiá el **Project ID** (algo tipo `union-italiana-12-abc12`)

### 2. Configurar local + primer deploy

```sh
npm install -g firebase-tools
firebase login                                  # abre browser, login Google
cd ~/projects/union-italiana-12

# Editar .firebaserc:
# {"projects":{"default":"TU_PROJECT_ID_REAL"}}

pnpm deploy:firebase
```

~30s. Sitio live en `https://TU_PROJECT_ID.web.app` (URL temporal Firebase).

### 3. Conectar custom domain en Firebase Console

1. Firebase Console → tu proyecto → **Hosting**
2. **Add custom domain** → `logiaunionitaliana12.com.ar` → Continue
3. Firebase te pide configurar **registros DNS** y muestra los valores exactos:
   - **TXT** record para verificar propiedad (algo como `google-site-verification=...`)
   - **A** records con 1 o 2 IPs (algo como `199.36.158.100`)

Anotá estos valores. Los necesitás en el paso 4.

### 4. Configurar DNS — DOS opciones

#### Dónde están los DNS de tu dominio NIC.ar

Tu dominio `logiaunionitaliana12.com.ar` está en NIC.ar. NIC.ar tiene panel propio de DNS:

1. Ir a https://nic.ar
2. **Iniciar sesión** con tu Clave Fiscal AFIP (nivel 3)
3. Menú → **Mis dominios**
4. Click sobre `logiaunionitaliana12.com.ar`
5. Vas a ver dos secciones:
   - **Delegaciones** → controla qué nameservers manejan tu dominio
   - **Zona DNS** o **DNS** → registros A, TXT, MX, CNAME

**Ahora tenés 2 caminos:**

##### Opción A — Usar DNS de NIC.ar (más simple, lo que ya tenés)

1. En el panel de tu dominio en NIC.ar → buscar **Editor de zona** o **Modificar zona DNS** (ubicación cambia según versión del panel)
2. Agregar registros:
   ```
   Tipo  Nombre  Valor
   ────  ──────  ─────────────────────────────────
   TXT   @       google-site-verification=ABC...   (valor exacto que dio Firebase)
   A     @       199.36.158.100                     (IP exacta que dio Firebase)
   A     @       199.36.158.101                     (segunda IP si la dio)
   ```
   (El símbolo `@` representa el dominio raíz `logiaunionitaliana12.com.ar`)
3. Guardar
4. Esperar propagación: 15-60 min normalmente, hasta 24h en peor caso

**Pros**: ya está todo en NIC.ar, no agregás otra plataforma.
**Contras**: panel de NIC.ar es viejo y burocrático.

##### Opción B — Delegar a Cloudflare DNS (recomendado, mejor UX)

1. Crear cuenta gratis en https://cloudflare.com
2. **Add a site** → `logiaunionitaliana12.com.ar` → Free plan
3. Cloudflare detecta los DNS actuales (si los hay) e te da **2 nameservers** propios:
   ```
   ej: nina.ns.cloudflare.com
       walt.ns.cloudflare.com
   ```
4. Volver a NIC.ar → tu dominio → **Delegaciones**:
   - Cambiar los nameservers actuales por los 2 de Cloudflare
   - Guardar
5. Esperar 15min-24h hasta que NIC.ar propague la delegación
6. Cloudflare te avisa cuando detecta que vos sos el dueño (mail)
7. Ahora desde **Cloudflare DNS Management** agregás los registros que pidió Firebase:
   ```
   Type  Name                            Content              Proxy
   ────  ──────────────────────────────  ───────────────────  ────────
   TXT   logiaunionitaliana12.com.ar     google-site-...      (DNS only)
   A     logiaunionitaliana12.com.ar     199.36.158.100       DNS only ⚠
   A     logiaunionitaliana12.com.ar     199.36.158.101       DNS only ⚠
   ```
   **Importante**: marcá **Proxy status: DNS only** (gris, no naranja). Si dejás el proxy de Cloudflare encima del de Firebase, hay doble CDN y rompe SSL.

**Pros**: UI moderna, muchas features extras (analytics gratis, page rules, redirects, email routing gratis para `info@logiaunionitaliana12.com.ar` → tu Gmail).
**Contras**: 1 plataforma más para gestionar (pero la UX vale).

### 5. Verificar en Firebase

Volver a Firebase Console → Hosting → tu dominio → **Verify**.

Firebase chequea los registros DNS:
- Si están bien → estado pasa a **Connecting…**
- Genera certificado SSL automático (~30 min)
- Después: **Connected** ✓
- Sitio live en `https://logiaunionitaliana12.com.ar` con HTTPS

### 6. Redirect www → apex (opcional)

Si querés que `www.logiaunionitaliana12.com.ar` también funcione:
1. Firebase → Hosting → **Add custom domain** → `www.logiaunionitaliana12.com.ar`
2. Marcá redirect → apex (sin www)
3. Firebase pide otro registro DNS, agregalo donde tengas los DNS

---

## Deploys siguientes

```sh
cd ~/projects/union-italiana-12
pnpm deploy:firebase
```

~30s. Listo, cambios live.

---

## Costos

| Item | Costo |
|------|-------|
| Dominio NIC.ar | ~$5-8k ARS/año (ya pagado) |
| Firebase Hosting | $0 (free tier 10GB/mes) |
| Cloudflare DNS (Opción B) | $0 |
| **Total mensual** | **$0** |

Solo el dominio anual ya lo tenés cubierto.

---

## Preguntas frecuentes

### Mi dominio era `logiaunionitaliana12.com.ar` no `unionitaliana12.com.ar`

Ya está corregido en todo el código del repo (commit `e5674b6`). El sitio se va a publicar correctamente a `logiaunionitaliana12.com.ar` cuando hagas el deploy.

### ¿Puedo seguir usando GH Pages mientras configuro Firebase?

Sí, los dos hosting funcionan en paralelo:
- GH Pages: `https://pelasonny-stack.github.io/union-italiana-12/` (actual)
- Firebase: `https://logiaunionitaliana12.com.ar` (después del deploy)

Cuando confirmes que Firebase funciona, podés desactivar GH Pages (Settings repo → Pages → None).

### "DNS verification failed" en Firebase

Esperá más. Los DNS pueden tardar hasta 24h en propagarse globalmente. Verificar:

```sh
dig logiaunionitaliana12.com.ar
dig TXT logiaunionitaliana12.com.ar
```

Si los registros no aparecen ahí, todavía no propagaron.

### Quiero `info@logiaunionitaliana12.com.ar` (email institucional)

3 opciones:
- **Cloudflare Email Routing** (gratis, lo recomiendo): redirige al Gmail. Solo recibís, no enviás desde el dominio.
- **Zoho Mail** (gratis 5 usuarios): inbox propio.
- **Google Workspace** ($6/usuario/mes): si querés todo en GCP/Google ecosystem.

---

## Cuando hagas todo

Pegame:
1. Project ID Firebase (para reemplazarlo en `.firebaserc`)
2. Si optaste por Opción A o B
3. Cuando hagas `firebase deploy` y veas el resultado

Te ayudo con cualquier paso que se trabe.
