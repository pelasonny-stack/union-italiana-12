# SEO — pasos para que el sitio aparezca en Google

URL: **https://logiaunionitaliana12.com.ar** (cuando custom domain esté live)
Mientras tanto: https://logiaunionitaliana12.pelasonny-stack.workers.dev/

---

## Lo que YA está hecho en el código

✅ JSON-LD Organization completo (nombre, fundación, dirección, geo, contactPoint, knowsAbout, parentOrganization GLA)
✅ JSON-LD WebSite con SearchAction
✅ JSON-LD FAQPage en /iniciacion/ (8 preguntas frecuentes — Google muestra como acordeón en resultados)
✅ Meta titles + descriptions optimizados con keywords (logia masónica BA, masonería italiana, etc)
✅ Sitemap XML automático en /sitemap-index.xml
✅ Hreflang ES/IT (Google sabe que son traducciones)
✅ OpenGraph (preview en redes)
✅ robots.txt permisivo + sitemap declarado
✅ HTTPS con HSTS
✅ Headings semánticos H1-H4 jerárquicos
✅ Imágenes con alt text descriptivo
✅ ContactCTA prominente al final de Home + Iniciación

---

## Lo que tenés que hacer — 5 pasos

### 1. Google Search Console (lo más importante)

1. Ir a https://search.google.com/search-console
2. Login con tu cuenta Google
3. **Add property** → **Domain** (no URL prefix)
4. Tipear `logiaunionitaliana12.com.ar` → Continue
5. Google te pide agregar un **TXT record DNS** para verificar propiedad. Copialo (algo como `google-site-verification=ABC123...`)
6. Ir a **Cloudflare DNS** → tu dominio → **Records** → Add record:
   - Type: TXT
   - Name: `@`
   - Content: el valor `google-site-verification=...` que te dio
   - Save
7. Volver a GSC → click **Verify** → debería pasar a Verified

8. Una vez verificado:
   - **Sitemaps** (sidebar) → Add new sitemap → tipear `sitemap-index.xml` → Submit
   - Google empieza a indexar (~1-7 días para primeros resultados)

### 2. Bing Webmaster Tools

1. https://www.bing.com/webmasters → login con Microsoft account
2. **Add a site** → URL → Verify (mismo método TXT que Google, o importar directo desde GSC con un click)
3. Submit sitemap

### 3. Google Business Profile (opcional pero MUY útil para SEO local)

Si querés que aparezca en Google Maps + búsquedas locales tipo "masonería en Buenos Aires":

1. https://www.google.com/business → Manage now
2. Crear perfil con datos de la Logia:
   - Business name: `R∴L∴ Unión Italiana N°12`
   - Category: `Religious organization` (lo más cercano) o `Cultural organization`
   - Location: San Antonio 814, Barracas, CABA (o decidir si publicar dirección)
   - Hours: cuándo se hacen tenidas blancas (públicas)
   - Photos: del Templo
3. Verificación: Google manda postal con código a la dirección física → llega en 1-2 semanas → ingresás código → activado
4. Si NO querés exponer dirección física: omitir Google Business

### 4. Backlinks de logias hermanas (orgánico)

Lo más impactante para SEO masónico. Pedir a:
- **GLA** (`@masoneria_argentina` IG, sitio masoneria-argentina.org.ar) que te listen como logia activa
- **Distrito Italiano** Argentina (si tienen sitio)
- Logias hermanas para intercambio de links
- **Wikipedia es** — agregar referencia en artículos sobre masonería argentina (con fuente verificable)

### 5. Contenido recurrente (long-tail SEO)

Cada post nuevo en blog/eventos = nueva URL indexable. Publicaciones recomendadas mensuales:
- Efemérides (23·XII, 18·VII, etc)
- Semblanzas de hermanos históricos
- Resúmenes de tenidas blancas (con permiso del VM)

Cada post genera potencial de ranking en su keyword específico.

---

## Keywords objetivo (a 6 meses)

Con el SEO aplicado, deberías rankear top 5 en:

**Primarios (alta intención):**
- "logia masónica unión italiana"
- "unión italiana 12 buenos aires"
- "logia barracas masonería"
- "como hacerse masón argentina"
- "iniciación masónica buenos aires"

**Secundarios (volumen alto):**
- "masonería buenos aires"
- "logia regular argentina"
- "masonería italiana argentina"
- "templo masónico barracas"
- "templo hijos del trabajo"
- "gran logia argentina logias"

**Long-tail (conversiones más altas):**
- "como peticionar masonería argentina"
- "requisitos masón argentina"
- "logia masónica recibe peticionarios buenos aires"
- "masonería italiana barracas"

---

## Tiempo esperado para resultados

- **Día 1-7**: GSC verifica + sitemap procesado
- **Día 7-30**: Google indexa páginas principales
- **Mes 1-3**: aparecés en SERPs por keywords muy específicas (nombre de la Logia)
- **Mes 3-6**: rankings en keywords de cola larga
- **Mes 6-12**: rankings competitivos en keywords primarias (depende de backlinks y contenido nuevo)

---

## Monitoreo

Cada 1-2 semanas en Google Search Console:
- **Performance** → ver impressions + clicks por query
- **Coverage** → asegurar que no haya páginas con errores
- **Sitemaps** → confirmar que se indexa todo
- Identificar queries donde estás en posición 5-15 → mejorar contenido específico para subir top 3

---

## Cuando hagas paso 1 (GSC)

Pegame:
- El TXT record que Google te dio (lo agregás vos en Cloudflare DNS, no requiere ayuda mía)
- Cuando Google verifique → screenshot del status
- Cuando submit el sitemap → screenshot del status

Si algo falla, lo desbloqueamos.
