# Instagram — Unión Italiana N°12

Kit completo: 9 posts iniciales + 3 stories + 6 highlights covers + bio + calendario + hashtags. Diseño coherente con la identidad del sitio (paleta Pompeii/Aldus/Cosmati, Cormorant + Cinzel, nastro tricolor, fleuron oro).

## Cómo usar

Las imágenes ya están renderizadas en PNG 1080×1080 (posts + highlights) y 1080×1920 (stories) — listas para subir directo.

Carpeta de assets:
```
instagram/output/posts/        → 9 PNG cuadrados
instagram/output/stories/      → 3 PNG verticales
instagram/output/highlights/   → 6 PNG cuadrados (covers de highlights)
```

### Para regenerar después de editar texto/diseño

1. Editar HTML en `instagram/templates/{posts,stories,highlights}/`
2. `node instagram/render.mjs`
3. Las PNG se actualizan en `output/`

---

## Cuenta y bio

Handle: **@unionitaliana12** — https://www.instagram.com/unionitaliana12/

### Bio (texto exacto, 150 chars max)

```
R∴L∴ Unión Italiana N°XII · MDCCCLVIII
Sociedad iniciática · Or∴ de Buenos Aires
Templo Hijos del Trabajo · Barracas
A∴G∴D∴G∴A∴D∴U∴
```

### Link en bio

`https://pelasonny-stack.github.io/union-italiana-12/`

(Usar acortador como bit.ly o Linktree si querés varios links.)

### Foto de perfil

Usar `public/assets/logos/union-italiana-12-logo.png` — escudo circular oficial.

---

## Highlights (6 covers)

Subir cada cover en una historia → fijar como highlight con el nombre exacto:

| Cover | Highlight name | Contenido |
|---|---|---|
| `historia.png` | **Historia** | Hitos 1858, fundación, refundación 2014 |
| `templo.png` | **Templo** | Galería del Templo Hijos del Trabajo |
| `iniciacion.png` | **Iniciación** | Cómo peticionar, proceso, requisitos |
| `efemerides.png` | **Efemérides** | 23·XII, 18·VII, 1871 fiebre amarilla, etc |
| `citas.png` | **Citas** | Mazzini, Garibaldi, Ingenieros, Sarmiento |
| `obediencia.png` | **GLA** | Gran Logia, regularidad, vínculo |

---

## Calendario editorial — primeros 30 días

| Día | Post | Tipo | Asset |
|---|---|---|---|
| 1 | Presentación de la Logia | Identidad | `01-presentacion.png` |
| 4 | Fundación (23·XII·1858) | Efeméride | `02-fundacion-1858.png` |
| 7 | El Templo Hijos del Trabajo | Lugar | `03-templo-foto.png` |
| 10 | José Ingenieros | Semblanza | `04-jose-ingenieros.png` |
| 14 | Cita Mazzini | Cita | `05-cita-mazzini.png` |
| 17 | Fachada egipcia (Sabías que…) | Curiosidad | `06-fachada-egipcia.png` |
| 21 | Bajo obediencia GLA | Institucional | `07-obediencia-gla.png` |
| 25 | Fiebre amarilla 1871 | Memoria | `08-fiebre-amarilla.png` |
| 30 | CTA — Atrio del Peticionario | Conversión | `09-iniciacion-cta.png` |

**Cadencia recomendada:** **2 posts por semana** (mar + vie, 19:00 hs argentina). Stories: 1 por semana mínimo. Reels: opcional, requieren video.

---

## Tono editorial (cómo escribir el copy)

Inspiración: prensa de Adelphi/Iperborea. Solemne pero contemporáneo. Frases cortas, una por línea cuando es aforística. Sin emojis salvo dingbats simples (✦ · ⸫ ).

### Plantilla de caption

```
[título destacado en una línea]

[1-3 párrafos breves, voz institucional sobria]

—

[Hashtags al final, separados]

#unionitaliana12 #masoneria #masonería #granlogiaargentina
#orientedelriodelaplata #barracas #italoargentino #risorgimento
```

### Hashtags principales

**Identidad (siempre):**
`#unionitaliana12 #masoneria #masonería #granlogiaargentina`

**Locación:**
`#barracas #orientedelriodelaplata #buenosaires #caba`

**Comunidad italo-argentina:**
`#italoargentino #risorgimento #colectividaditaliana`

**Temáticos según post:**
`#josebingenieros #garibaldi #mazzini #salvarezza #hijosdeltrabajo
#templomasonico #patrimonioCABA #aldushistoria #sigloxix`

**Internacionales (opcional, alcance amplio):**
`#freemasonry #freemason #masonic #lodge`

Total recomendado por post: **8-12 hashtags** (más de 15 reduce alcance).

---

## Captions sugeridos por post

### 01 — Presentación
```
Respetable Logia Unión Italiana N°XII

Sociedad iniciática, filantrópica, filosófica y progresista — al Oriente de Buenos Aires desde el 23 de diciembre de 1858.

Trabajamos los lunes en el histórico Templo Hijos del Trabajo, en Barracas, bajo la obediencia de la Gran Logia de la Argentina de Libres y Aceptados Masones.

A∴ G∴ D∴ G∴ A∴ D∴ U∴

—

#unionitaliana12 #masoneria #granlogiaargentina #orientedelriodelaplata #barracas #italoargentino
```

### 02 — Fundación 1858
```
23 · XII · 1858

Hoy hace 167 años se consagraron los trabajos de nuestra Logia bajo el nombre de Unione Italiana, con sesiones en italiano.

Primer Venerable Maestro: José Salvarezza, médico genovés graduado en la Universidad de Buenos Aires (1866), cofundador de la Unione e Benevolenza, presente en la asistencia durante el cólera de 1867 y la fiebre amarilla de 1871.

—

#unionitaliana12 #masoneria #efemerides #risorgimento #1858 #italoargentino #salvarezza #hijosdeltrabajo
```

### 03 — Templo Hijos del Trabajo
```
San Antonio 814, Barracas.

Trabajamos en el histórico Templo Hijos del Trabajo, consagrado el 22 de junio de 1890 por la R∴L∴ del mismo nombre. La fachada egipcia, obra de Francisco Cabot, data de 1919.

Frontispicio: Trabajo · Ciencia · Virtud.
Patrimonio cultural de la Ciudad de Buenos Aires (Ord. 48.475/1994).

—

#templomasonico #hijosdeltrabajo #barracas #patrimonioCABA #masoneria #unionitaliana12 #arquitectura
```

### 04 — José Ingenieros
```
José Ingenieros (1877—1925)

"La curiosidad intelectual es la negación de todos los dogmas."

Nacido Giuseppe en Palermo, llegó a Buenos Aires en 1885 con su padre, el periodista siciliano Salvatore Ingegnieros. Iniciado masón el 5 de agosto de 1898 en la Unión Italiana Primera N°90. Gran Hospitalario de la masonería argentina en 1901-1902.

Autor de El hombre mediocre (1913), Hacia una moral sin dogmas (1917) y Las fuerzas morales (1925).

—

#joseingenieros #masoneria #semblanzas #filosofiaargentina #italoargentino #unionitaliana12 #librepensamiento
```

### 05 — Cita Mazzini
```
"Lavorate sempre per il bene dell'umanità."
— Giuseppe Mazzini

Mazzini, fundador de la Giovine Italia, fue padrino simbólico de la Unione e Benevolenza al abrir sus puertas en Buenos Aires el 18 de julio de 1858 — apenas cinco meses antes de que se consagraran los trabajos de nuestra Logia.

—

#mazzini #risorgimento #italoargentino #masoneria #citasmasonicas #unionitaliana12 #fratellanza
```

### 06 — Fachada egipcia
```
¿Sabías que nuestra fachada es egipcia?

Rediseñada en 1919 por el arquitecto Francisco Cabot, la fachada del Templo Hijos del Trabajo combina columnas papiriformes, hojas de loto y el globo alado de los egipcios — símbolo de la sublimación de la materia.

"Los usos y costumbres de la masonería han tenido una afinidad muy similar a los practicados por los egipcios, que no exponían sus misterios a las miradas profanas."

—

#templomasonico #hijosdeltrabajo #franciscocabot #1919 #barracas #orientalismo #patrimonioCABA #masoneria #unionitaliana12
```

### 07 — Obediencia GLA
```
Bajo la jurisdicción de la Gran Logia de la Argentina de Libres y Aceptados Masones.

Ciencia · Justicia · Trabajo

Constituida el 11 de diciembre de 1857 por figuras que incluyeron a Sarmiento, Roque Pérez y Justo José de Urquiza. Su sede, el Palacio Cangallo, fue completada por el arquitecto italiano Francisco Tamburini.

Trabajamos en una de las 300+ logias regulares que componen la Obediencia argentina.

—

#granlogiaargentina #masoneria #regularidad #orientedebuenosaires #masoneriaargentina #unionitaliana12 #palacioCangallo #tamburini
```

### 08 — Fiebre amarilla
```
Memoria · Buenos Aires, 1871.

La epidemia de fiebre amarilla mata a 14.000 personas. 9.000 son italianos, hacinados en los conventillos de La Boca y Barracas.

El Gran Maestro Roque Pérez, presidente de la Comisión Popular, muere en cumplimiento del deber.

José Salvarezza —primer Venerable Maestro de nuestra Logia— atiende sin cobrar a las víctimas en los barrios obreros.

—

#1871 #fiebreamarilla #buenosaires #masoneria #efemerides #salvarezza #roquepere #italoargentino #unionitaliana12 #colectividaditaliana
```

### 09 — Atrio del Peticionario
```
¿Llamás a las puertas del Templo?

No practicamos proselitismo. La candidatura parte siempre del interesado.
Es un proceso, no un trámite.

Veintitrés umbrales. Meses o años de evaluación. Ninguna ventaja profesional, política ni económica al ingresar.

Si la imagen te interpela, leé primero la página de Iniciación en nuestro sitio (link en bio) — y después decidí.

—

#iniciacion #masoneria #unionitaliana12 #librepensamiento #orientedelriodelaplata #atrio
```

---

## Stories — sugerencias

### 01 — Bienvenida (cuando reactivás la cuenta)
Caption: *"Refundamos nuestra presencia digital. Bienvenidos al Oriente de Buenos Aires."*

### 02 — Templo (mostrar el lugar)
Caption: *"Aquí trabajamos cada lunes."* Sticker con dirección clickable.

### 03 — CTA Iniciación
Caption: *"Link en bio."* + sticker pregunta: *"¿Sobre qué te gustaría leer?"*

---

## Estrategia de crecimiento (orgánico)

1. **Etiquetar cuentas hermanas** en posts relevantes:
   - `@masoneria_argentina` (GLA, 41K)
   - `@cultura_masoneria` (Subsecretaría GLA, 23K)
   - Distrito Italiano si tiene cuenta
   - Logia Hijos del Trabajo si tiene cuenta

2. **Engagement responsable:**
   - Comentar posts de logias hermanas con frase corta + relevante (no spam)
   - Compartir efemérides comunes (3·III día del Aprendiz, 24·VI San Juan)

3. **Reels (futuro):**
   - Video del nastro tricolor del sitio
   - Tour del Templo (con autorización VM)
   - Lectura de plancha pública

4. **Colaboraciones:**
   - Co-posts con `@granlogiaargentina` en aniversarios
   - Etiquetar académicos/historiadores que trabajen masonería argentina

5. **Llamada a no-masones interesados:**
   - Tenidas blancas: anunciar con story 5 días antes + recordatorio día anterior
   - Bibliografía pública: posts ciclo "Lecturas" mostrando libros de la biblioteca

---

## Reglas de oro

- ✅ **Frases cortas, una por línea cuando es aforística**
- ✅ **Tono solemne pero contemporáneo** (no esotérico ni autoayuda)
- ✅ **Datos verificables** (fechas, nombres, fuentes)
- ✅ **Romanos para fechas históricas**: MDCCCLVIII, no 1858
- ✅ **Bilingüe ocasional**: una frase italiana en italics suma identidad
- ❌ **No emojis** salvo dingbats: ✦ · ⸫
- ❌ **No hashtags genéricos** (#love, #happy)
- ❌ **No selfies de hermanos** sin autorización por escrito
- ❌ **No revelar nombres de hermanos vivos** sin consentimiento

---

## Editar / actualizar

Cada vez que cambies un texto en HTML:

```sh
node instagram/render.mjs
```

Eso regenera todas las PNG. Subí las nuevas a IG.

Para crear posts nuevos: copiar un HTML existente como template, editar texto, run render. Los nuevos PNGs aparecen automático en `output/`.
