# Textos del sitio — Español

> **Cómo usar este archivo:** editá cualquier texto, decime qué cambiaste (o pasame el archivo entero modificado) y yo aplico los cambios al codebase. NO es auto-aplicable — funciona como hoja de trabajo editorial.
>
> Convenciones:
> - **`bold`** = etiqueta del elemento (botón, label, etc)
> - texto plano = contenido editable
> - `└→ src/...` = archivo donde vive (referencia)

---

## NAVEGACIÓN PRINCIPAL — Header
`└→ src/i18n/es.json` y `src/components/layout/Header.astro`

| Item | Label |
|---|---|
| Inicio | `Inicio` |
| La Logia | `La Logia` |
| Masonería | `Masonería` |
| Actividades | `Actividades` |
| Iniciación | `Iniciación` |
| Contacto | `Contacto` |

**Wordmark del logo:** `UNIÓN ITALIANA · N° XII · MDCCCLVIII`

**Drawer mobile:**
- Botón abrir: `Abrir menú`
- Botón cerrar: `Cerrar menú`
- Footer del drawer: `Bajo la obediencia de la Gran Logia de la Argentina` → link `masoneria-argentina.org.ar →`

---

## FOOTER
`└→ src/components/layout/Footer.astro` + `src/i18n/es.json`

### Sello de obediencia (GLABadge)
- Overline: `Sello de Obediencia · MDCCCLVII—MMXXV`
- Texto: `Bajo la obediencia de la`
- Nombre: `Gran Logia de la Argentina de Libres y Aceptados Masones`
- Fundación: `Fundada el 11 · XII · MDCCCLVII`
- Link: `Visitar el sitio oficial →`

### Identidad
- Nombre: `Unión Italiana N°12`
- Lema: `Libertad, Igualdad, Fraternidad`
- Fundación: `Fundada el 23 de diciembre de 1858`

### Columnas de links
| Header | Items |
|---|---|
| **Institucional** | Quiénes somos · Historia · Vínculo italiano · Obediencia (GLA) |
| **Recursos** | Glosario · Biblioteca |
| **Iniciación** | ¿Es para mí? · Atrio del Peticionario · Contacto |
| **Legal** | Política de privacidad · Términos de uso |

### Meta
- Label: `Trabaja en el Templo`
- Templo: `Hijos del Trabajo`
- Dirección: `San Antonio 814 · Barracas · CABA · Argentina`
- Link mapa: `Ver en el mapa →`
- Label social: `Seguinos`

### Baseline
- Lema: `A∴ L∴ G∴ D∴ G∴ A∴ D∴ U∴`
- Copyright: `© MMXXV · BUENOS AIRES · SUB ROSA`

---

## HOME — `/es/`
`└→ src/pages/es/index.astro`

### Hero (HeroTemple)
- Masthead: `VOLUMEN I · BUENOS AIRES · MMXXV`
- Eyebrow: `Respetable Logia` → `RESPETABLE LOGIA`
- Hero name: `Unión Italiana`
- Sub: `N° XII · MDCCCLVIII`
- Subtitle: `Logia masónica regular · al Oriente de Buenos Aires desde 1858`
- CTA: `Recorrer el Templo`
- Datestamp: `[día] · [mes romano] · MMXXV — [año AVL] A∴ V∴ L∴`
- Link primera visita: `¿Primera visita? →`
- Aniversarios: `Año [N romanos] desde la refundación · [N romanos] desde la fundación`

### Próxima Tenida (UpcomingEvent)
`└→ src/data/upcoming-event.json`
- Eyebrow: `Próxima sesión pública · [tipo evento]`
- Título evento (editable en JSON): `Cultura italiana en la Argentina del Centenario`
- Tipo evento: `Tenida blanca`
- Countdown: `Faltan [N romanos] días` / `Hoy` / `Mañana`
- CTA: `Inscribirse →`

### Párrafo lead
> Desde el 23 de diciembre de 1858, en el Oriente de Buenos Aires, una Logia trabaja en la herencia espiritual y cívica que dejaron los italianos llegados al Río de la Plata. Su primer Venerable Maestro fue el médico José Salvarezza. Refundada en 2014 por un grupo de Maestros Masones, la Unión Italiana N°12 sostiene hoy sus tenidas regulares en el histórico Templo "Hijos del Trabajo", en Barracas, bajo la obediencia de la Gran Logia de la Argentina de Libres y Aceptados Masones.

### Tres puertas (ThreeDoors)
| Eyebrow | Título | Texto |
|---|---|---|
| `MDCCCLVIII — Hoy` | `Conocer la historia` | `Una historia documentada, no mítica. Del Risorgimento a la refundación de 2014.` |
| `Una Orden iniciática` | `Comprender la Orden` | `Qué es —y qué no es— la masonería regular. Sin secretos, con reservas.` |
| `Atrio del Peticionario` | `Iniciar el camino` | `Si llegó hasta aquí por algo más que curiosidad pasajera, pase y lea con atención.` |

### Cita rotativa (RotatingQuote)
`└→ src/components/content/RotatingQuote.astro` (corpus de 12 citas, rota por día del año)

Corpus actual:
1. José Ingenieros — `El hombre mediocre cree y el sabio piensa.`
2. Giuseppe Mazzini — `Lavorate sempre per il bene dell'umanità.`
3. Giuseppe Mazzini — `Donde el hombre es libre, allí está la patria.`
4. Sarmiento — `La libertad sin la luz no es libertad: es ceguera.`
5. Antiguo uso del oficio — `Hombre libre y de buenas costumbres.`
6. Lema masónico (latín) — `Ordo Ab Chao.`
7. Antiguo deber del Aprendiz (latín) — `Audi, vide, tace.`
8. VITRIOL — `Visita el interior de la tierra y, rectificando, hallarás la piedra oculta.`
9. Tradición de Logia — `La fraternidad no se proclama: se prueba.`
10. Lema del Templo de Barracas — `Cada hombre es hijo del trabajo.`
11. José Ingenieros — `Pensar bien para vivir mejor.`
12. Tradición masónica — `Tolerancia activa, no indiferente.`

---

## LA LOGIA — `/es/la-logia/`

### Index `└→ src/pages/es/la-logia/index.astro`
- Eyebrow: `Quienes somos`
- Título: `La Logia`
- Subtitle: `Quattro secoli di lavoro continuo dell'oficio`

> La Respetable Logia Unión Italiana N°12 trabaja regularmente desde el 23 de diciembre de 1858. Cuatro secciones permiten recorrer su pasado, sus miembros históricos, el espacio físico donde se reúne, y la trama italiana que la sostiene.

Sub-páginas listadas:
- `Historia — fundación 1858, José Salvarezza, refundación 2014`
- `El Templo — Hijos del Trabajo, Barracas (galería)`
- `Miembros ilustres — Ingenieros, Salvarezza y otros`
- `El vínculo italiano — Mazzini, fiebre amarilla, Hospital Italiano, La Plata`
- `Obediencia — Gran Logia de la Argentina`

### Historia `└→ src/pages/es/la-logia/historia.astro`
- Eyebrow: `1858 — 2025`
- Título: `Nuestra historia`
- Subtitle: `Cento sessantasette anni di lavoro`

**Lead:**
> La Respetable Logia Unión Italiana N°12 nació en plena efervescencia del Risorgimento, cuando Italia aún no era una nación y miles de italianos cruzaban el Atlántico para hacer otra. Su nombre es programático: *unión*, no Italia. La Logia ha sido, desde entonces, espacio de encuentro entre la fraternidad masónica y la cultura asociativa italiana en la Argentina.

**Línea de tiempo (9 hitos):**
1. **1858 — Fundación**: 23 de diciembre. Un grupo de masones italianos y argentinos consagra los trabajos de la Logia con el nombre de Unione Italiana. Primer Venerable Maestro: Bro. José Salvarezza, médico y figura prominente de la comunidad italiana.
2. **1860—1880 — Risorgimento desde el Río de la Plata**: La Logia opera como refugio espiritual y operativo para masones italianos comprometidos con la unificación de la península y la causa republicana.
3. **1871 — Fiebre amarilla**: Los hermanos de la Logia participan, junto a la Comisión Popular, en la asistencia médica y la organización del socorro durante la epidemia de fiebre amarilla que devastó Buenos Aires.
4. **1872 — Hospital Italiano**: Hermanos de la Logia colaboran activamente en la gestación y consolidación del Hospital Italiano de Buenos Aires.
5. **1882 — Fundación de La Plata**: Masones de la Logia participan en el equipo dirigido por Dardo Rocha en la fundación de la nueva capital provincial.
6. **1898 — José Ingenieros**: El joven José Ingenieros es iniciado en la Logia Unión Italiana Primera N°90 (rama derivada). Continuará la obra publicística masónica iniciada por su padre Salvador (Salvatore Ingegnieros).
7. **Siglo XX — Continuidad y silencio**: Las dos guerras mundiales, los sucesivos golpes y los años de la última dictadura ponen a prueba la continuidad de los trabajos. La Logia atraviesa períodos más visibles y otros más reservados.
8. **2014 — Refundación**: Un grupo de Maestros Masones, preocupados por la falta de presencia de la Orden en La Boca, solicita autorización para reinstaurar la Unión Italiana N°12. La Logia retoma sus trabajos regulares.
9. **Hoy — Templo Hijos del Trabajo**: Trabaja con regularidad en el histórico Templo Hijos del Trabajo, San Antonio 814, Barracas — bajo la obediencia de la Gran Logia de la Argentina de Libres y Aceptados Masones.

**Cita:** `Ogni uomo è figlio del suo lavoro.` — Lema del Templo Hijos del Trabajo, Barracas

**Sobre el nombre y los nombres:**
> Los archivos del XIX registran a la Logia como *Unione Italiana* (con la grafía italiana). Las sesiones se sostuvieron originalmente en italiano. Una rama derivada, la *Unión Italiana Primera N°90*, fue la que recibió a José Ingenieros en 1898. La numeración actual —N°12— responde al ordenamiento de la Gran Logia de la Argentina tras sus sucesivas reorganizaciones del siglo XX.

**Material de archivo:**
> Los documentos fundacionales, fotografías históricas y semblanzas de Venerables Maestros se publicarán a medida que el archivo de la Logia se digitalice. Para consultas académicas, escribir a unionitaliana12@gmail.com.

### El Templo `└→ src/pages/es/la-logia/templo.astro`
- Eyebrow: `San Antonio 814 · Barracas, CABA`
- Título: `El Templo`
- Subtitle: `Hijos del Trabajo — desde 1882`

**Captions de las 4 fotos:**
1. `Salón principal — paredes en bermellón, piso de pinotea, bóveda celeste con nubes pintadas`
2. `Delta Luminoso — el Ojo de la Providencia simboliza la conciencia universal que ilumina el trabajo masónico`
3. `Bóveda celeste y araña central — todo templo masónico tiene techo azul con nubes, recordando el lugar del hombre bajo el cielo`
4. `Fachada egipcia (1919, Francisco Cabot) — declarada de interés cultural por la Ciudad de Buenos Aires en 2002`

**Lead:**
> La Respetable Logia Unión Italiana N°12 sostiene sus tenidas regulares en el histórico Templo "Hijos del Trabajo", en San Antonio 814, barrio de Barracas. Es uno de los pocos templos masónicos de Buenos Aires con fachada visible desde la calle —y uno de los más singulares: arquitectura egipcia de 1919, obra de Francisco Cabot, con frontispicio que lleva la inscripción **HIJOS DEL TRABAJO** bajo el lema *Trabajo · Ciencia · Virtud*.

**Una breve historia del edificio:**
> El Templo fue consagrado en junio de 1890. Su Logia original, también llamada *Hijos del Trabajo*, fue fundada en 1882 y desempeñó un papel central en el Barracas obrero —italiano en su mayoría— sosteniendo asociaciones mutuales y cobijando reuniones sindicales y de ayuda mutua. La fachada egipcia, exótica para Buenos Aires, fue añadida en 1919 cuando el orientalismo masónico estaba en su apogeo.
>
> Tras la disolución de la Logia Hijos del Trabajo en 1983, el Templo permaneció bajo jurisdicción de la Gran Logia. La refundación de la Unión Italiana N°12 en 2014 devolvió a este espacio sagrado la actividad ritual regular —cerrando un círculo histórico: una logia italo-argentina trabajando en el templo levantado por la colectividad italiana de Barracas hace casi siglo y medio.

**Lectura simbólica del espacio (lista):**
- **Bóveda celeste pintada al fresco** — recuerda al masón que su trabajo ocurre bajo el cielo, no fuera de él. Las nubes y los astros señalan que la verdad última excede toda explicación humana.
- **Delta Luminoso con el Ojo de la Providencia** — el triángulo equilátero refiere a la conciencia universal; el ojo, a la atención que ningún gesto del iniciado escapa.
- **Paredes en bermellón** — color tradicional de los templos del Rito Escocés, evoca el calor del trabajo interior y, simbólicamente, la sangre del compromiso fraterno.
- **Columnas papiriformes** de la fachada — el orientalismo del XIX leyó en Egipto la cuna del simbolismo masónico, una tesis que la masonería moderna matiza pero conserva como evocación.
- **Arañas y candelabros** — la luz de las velas era, en el siglo XIX, la única posible en una tenida nocturna; hoy se conserva en momentos rituales precisos como signo de continuidad con la tradición.

**Visita:** El Templo abre al público en ocasiones especiales: tenidas blancas, Noche de los Museos, conferencias culturales abiertas. Las fechas se anuncian en la sección Tenidas blancas y en las redes sociales de la Logia.

### Vínculo italiano `└→ src/pages/es/la-logia/vinculo-italiano.astro`
- Eyebrow: `Risorgimento → Río de la Plata`
- Título: `El hilo italiano`
- Subtitle: `Del Ottocento a la Buenos Aires de hoy`

**Lead:** La italianidad de esta Logia no es decorativa. Atraviesa su nombre, su origen, sus miembros fundadores y la trama política y cultural en la que nació. Esta página reconstruye —de manera deliberadamente sobria— ese hilo.

**Mazzini, Garibaldi y la masonería italiana del Ottocento:**
> La masonería del Ottocento italiano fue inseparable del proceso de unificación nacional. Giuseppe Mazzini, fundador de la Giovine Italia, y Giuseppe Garibaldi, figura tutelar del Risorgimento, eran masones reconocidos. La Loggia "Carbonaria" y luego la masonería propiamente dicha proveyeron una red transnacional de discusión política, fraternidad militante y exilio refugiado.

**Cita:** `L'unità d'Italia è la più grande delle questioni: è una questione religiosa.` — Giuseppe Mazzini

**La inmigración italiana en Argentina (1850-1930):**
> Entre 1857 y 1930, más de 2,3 millones de italianos arribaron a Argentina. Trajeron consigo una cultura asociativa madura: mutuales (Unione e Benevolenza, Patria e Lavoro), sociedades de socorros mutuos, escuelas de lengua italiana, periódicos en italiano, hospitales étnicos. Las logias italianas de Buenos Aires —Italia, Unión Italiana, Roma, Sette Colli, Leonardo da Vinci— forman parte indistinguible de ese ecosistema.

**La Unión Italiana N°12 en ese ecosistema** (con 3 episodios):
1. **Epidemia de fiebre amarilla (1871):** hermanos de la Logia participaron de la Comisión Popular y de los cuerpos médicos voluntarios que asistieron a la población durante la peor crisis sanitaria de la Buenos Aires del XIX.
2. **Fundación del Hospital Italiano (1872):** hermanos de la Logia colaboraron en su gestación y en el sostén económico de los primeros años.
3. **Fundación de la Ciudad de La Plata (1882):** masones de la Logia participaron en el equipo dirigido por Dardo Rocha, masón él mismo, en el diseño y trazado de la nueva capital provincial. El italiano Francisco Tamburini, quien completó la sede de la Gran Logia (Palacio Cangallo), pertenece a este mismo ecosistema italo-masónico de la Buenos Aires del Centenario.

> A esto se suma la contribución, en 1889, al monumento al ex Gran Maestro italiano Giuseppe Petroni, y la presencia constante en las instituciones de la colectividad: *Unione e Benevolenza*, *Patria e Lavoro*, escuelas de lengua italiana, sociedades de socorros mutuos.

**Hermanamientos y vínculos contemporáneos:**
> La Logia mantiene intercambios con logias del Grande Oriente d'Italia y con la Delegación Magistral Argentina de la Serenissima Gran Loggia d'Italia. Hermanos visitantes italianos son recibidos en tenida con frecuencia.

**Stub:** Esta sección será ampliada con la lista de hermanamientos vigentes y un mapa interactivo de logias italianas en Argentina, una vez confirmados con el Venerable Maestro.

### Miembros ilustres `└→ src/pages/es/la-logia/miembros-ilustres.astro`
- Eyebrow: `Pasado documentado`
- Título: `Miembros ilustres`
- Subtitle: `Sólo personas fallecidas, sólo membresía documentada`

**Lead:** Cada perfil cita fuentes verificables. Las personas marcadas como *vinculadas culturalmente* no fueron miembros formales de esta Logia, pero pertenecen al ecosistema masónico italo-argentino del que somos parte.

**Perfiles (6):**

1. **José Salvarezza** (siglo XIX · Miembro confirmado)
   Médico de la colectividad italiana, primer Venerable Maestro de la Logia (1858). Figura prominente de la asistencia médica durante la fiebre amarilla de 1871.

2. **José Ingenieros** (1877—1925 · Miembro confirmado)
   Médico, psiquiatra, sociólogo y ensayista. Iniciado en 1898 en la Unión Italiana Primera N°90 siguiendo a su padre. Autor de El hombre mediocre y Las fuerzas morales.

3. **Salvador Ingenieros / Salvatore Ingegnieros** (1850—1924 · Miembro confirmado)
   Periodista, socialista de primera hora, inmigrante siciliano, padre de José. Coredactor de la Revista Masónica.

4. **Giuseppe Garibaldi** (1807—1882 · Vínculo cultural)
   Iniciado en Montevideo (1844). Sombra tutelar de toda logia italiana del Río de la Plata. Vínculo cultural, no miembro de esta Logia.

5. **Antonio Devoto** (1833—1916 · Vínculo cultural)
   Banquero, fundador del Banco de Italia y Río de la Plata, mecenas de la colectividad italiana en Buenos Aires.

6. **Francisco Tamburini** (1846—1890 · Vínculo cultural)
   Arquitecto italiano, completó el Palacio Cangallo —sede de la Gran Logia— iniciado por Dardo Rocha. Autor también de la Casa Rosada y el Teatro Colón.

**Stub:** La lista completa será publicada cuando el archivero de la Logia confirme los registros del siglo XIX. Cada perfil tendrá su propia página con biografía extendida y bibliografía.

### Obediencia `└→ src/pages/es/la-logia/obediencia.astro`
- Eyebrow: `Jurisdicción y regularidad`
- Título: `Bajo obediencia de la Gran Logia`
- Subtitle: `Ciencia · Justicia · Trabajo`

**Lead:**
> Toda Logia masónica regular trabaja en obediencia a una autoridad mayor que asegura la continuidad de la tradición, el reconocimiento entre logias hermanas y el cumplimiento de los antiguos límites del oficio. La Respetable Logia Unión Italiana N°12 trabaja bajo la jurisdicción de la **Gran Logia de la Argentina de Libres y Aceptados Masones**, con sede en el Palacio Cangallo, Tte. Perón 1242, Ciudad Autónoma de Buenos Aires.

**La Gran Logia de la Argentina:**
> Constituida el **11 de diciembre de 1857** en Buenos Aires por figuras que incluyeron a Domingo F. Sarmiento, José Roque Pérez, Miguel Valencia y Justo José de Urquiza, la Gran Logia es el cuerpo soberano que agrupa a las logias regulares de la Argentina. Fue, además, organización fundadora de la Confederación Masónica Interamericana.
>
> Su sede actual, conocida como **Palacio Cangallo**, fue diseñada por Dardo Rocha y completada por el arquitecto italiano Francisco Tamburini. Inaugurado el 3 de marzo de 1872, el edificio alberga nueve templos, entre ellos el Gran Templo.
>
> Su lema —*Ciencia, Justicia, Trabajo*— ordena las virtudes que la Orden propone a sus miembros: el cultivo del conocimiento, la rectitud en el trato, y la dignidad del oficio bien hecho.

**Qué significa "regular":**
> Una Logia regular es la que se constituye conforme a las antiguas tradiciones del oficio, reconoce a las grandes logias hermanas reconocidas internacionalmente, y trabaja en obediencia a una autoridad masónica que asegura esa continuidad. La regularidad no es una etiqueta orgullosa: es la garantía de que un hermano de la Unión Italiana N°12 puede sentarse a trabajar en cualquier logia regular del mundo reconociendo —y siendo reconocido— como tal.

**Autoridades:**
- **Muy Respetable Gran Maestre:** Pablo Lázaro
- **Sede:** Tte. Perón 1242 — Ciudad Autónoma de Buenos Aires
- **Sitio oficial:** masoneria-argentina.org.ar
- **Contacto:** info@masoneria-argentina.org.ar · (011) 4382-2585

**Vínculo con la masonería italiana:**
> Por su nombre y su origen, la Unión Italiana N°12 mantiene además vínculos vivos con la masonería italiana. Históricamente con el *Grande Oriente d'Italia* y, más recientemente, con la Delegación Magistral Argentina de la *Serenissima Gran Loggia d'Italia*. Su pertenencia formal, sin embargo, es exclusivamente la Gran Logia de la Argentina: la regularidad masónica no admite obediencias simultáneas.

---

## MASONERÍA — `/es/masoneria/`

### Index `└→ src/pages/es/masoneria/index.astro`
- Eyebrow: `Una Orden iniciática`
- Título: `Masonería`
- Subtitle: `Senza segreti, con riserve`

**Lead:** La masonería no es una sociedad secreta ni una orden religiosa: es una orden iniciática, fraternal, filosófica y filantrópica que se vale del simbolismo del oficio de constructor para proponer a sus miembros un trabajo metódico sobre sí mismos. Las páginas siguientes desarrollan los puntos esenciales.

Sub-páginas:
- `Qué es la masonería — una definición sobria`
- `Principios — Libertad, Igualdad, Fraternidad, Tolerancia`
- `Glosario — quince términos clave`
- `Biblioteca — textos en dominio público`

### Qué es `└→ src/pages/es/masoneria/que-es.astro`
- Eyebrow: `Definición pública`
- Título: `Qué es la masonería`

**Bloque "En ocho segundos":**
> **La masonería es una orden iniciática y filosófica** con tres siglos de continuidad. No es religión, no es partido, no es secreta — sólo discreta. Trabaja con el simbolismo del oficio de constructor para que cada hombre se mejore a sí mismo y contribuya a sus semejantes.

**Lead:**
> Conviene, antes de toda definición, despejar dos malentendidos persistentes. La masonería no es una sociedad secreta: sus reuniones son privadas como lo son las de cualquier institución que delibera en su sede, y su existencia, sus principios, su gobierno y su literatura están públicamente disponibles desde 1717. Tampoco es una orden religiosa: no impone credo alguno, no oficia sacramentos, no se interpone entre el hombre y el sentido último que cada uno otorgue a su existencia.
>
> Es, sí, una orden iniciática. Esto significa que se ingresa a ella por una ceremonia —la iniciación— que no se cuenta porque no se entiende contándola; se entiende viviéndola. Y significa, sobre todo, que el masón asume un método de trabajo sobre sí mismo. La metáfora del oficio de constructor —la piedra bruta que el aprendiz debe pulir, el plano que el maestro debe leer, el templo cuya edificación nunca termina— no es decoración pintoresca: es la lengua precisa con que la Orden se piensa a sí misma desde hace tres siglos.

**Lo que la masonería ES:**
- **Orden iniciática**: se ingresa por una ceremonia, no por un trámite.
- **Fraternal**: sostiene un lazo entre sus miembros que excede la afinidad personal.
- **Filosófica**: trabaja con un método —el simbolismo del oficio— para pensar las cuestiones humanas fundamentales.
- **Filantrópica**: el deber de asistir al semejante es parte sustancial de su práctica.

**Lo que la masonería NO es:**
- **No es religión**: no impone dogma, no celebra culto, no se interpone entre el hombre y lo divino.
- **No es partido**: no toma posición sobre las controversias políticas del día.
- **No es secta**: no exige ruptura con la familia, la profesión, la confesión religiosa o la nacionalidad de quien se inicia.
- **No es secreta**: tiene reservas (la palabra exacta de Mackey), no secretos.
- **No es sociedad de poder**: usar los lazos masónicos para fines personales —negocios, ventajas, prestigio— está expresamente proscripto.

**El método: el simbolismo del oficio:**
> La masonería habla en imágenes: la piedra bruta, la escuadra, el compás, las columnas del templo, el pavimento mosaico, el plano del arquitecto. Cada símbolo es una invitación a pensar. La piedra bruta del aprendiz es su carácter sin trabajar; el compás del maestro, la medida de su actuación. No son alegorías cerradas: cada hermano las recorre por su cuenta.

**La regularidad — qué significa:**
> Una logia regular es la que se constituye conforme a las antiguas tradiciones del oficio, reconoce a las grandes logias hermanas reconocidas, y trabaja en obediencia a una autoridad masónica que asegura esa continuidad. La Unión Italiana N°12 trabaja bajo la jurisdicción de la Gran Logia de la Argentina de Libres y Aceptados Masones.

**Para seguir leyendo:** En la biblioteca de este sitio se encuentran textos fundamentales en dominio público —desde las Constituciones de Anderson (1723) hasta obras de masones argentinos del siglo XIX— para quien quiera profundizar.

### Principios `└→ src/pages/es/masoneria/principios.astro`
- Eyebrow: `Lo que articula la práctica`
- Título: `Principios`

**Libertad:** La masonería pide a quien se inicia que sea libre — no en sentido jurídico meramente, sino moral. Libre de servidumbres voluntarias, libre del temor a pensar.

**Igualdad:** Dentro del Templo, cesan las distinciones del mundo profano. Un hermano es un hermano, cualquiera sea su origen, condición económica, profesión o jerarquía civil.

**Fraternidad:** No es afecto sentimental, sino lazo asumido. Implica obligaciones concretas: asistencia, lealtad, defensa de la reputación del hermano ausente.

**Tolerancia:** No es indiferencia ni relativismo: es la disposición activa a sostener el diálogo entre hombres de convicciones diversas, a partir del reconocimiento de la dignidad común.

**La cuestión del Gran Arquitecto del Universo:**
> La masonería regular pide a quien peticiona que afirme su creencia en un Principio Creador, al que llama Gran Arquitecto del Universo. La fórmula es deliberadamente abierta: cada hermano la entiende según su tradición religiosa o filosófica. La Orden no exige adhesión a ningún dogma, ni a ninguna confesión. Lo que pide es que el hombre que se inicia no se considere a sí mismo el centro y la medida de todas las cosas.

**Laicidad y compromiso cívico:**
> La masonería argentina, históricamente, ha defendido la laicidad del Estado, la educación pública y la separación entre poder civil y religioso. La Logia no toma posición partidaria, pero los hermanos —cada uno por su cuenta— son ciudadanos activos del país que los acoge.

### Glosario `└→ src/pages/es/masoneria/glosario.astro`
- Eyebrow: `Quince términos`
- Título: `Glosario`
- Subtitle: `Definiciones públicas, verificables, sobrias`

**Lead:** Las definiciones siguientes provienen de fuentes públicas (Mackey, Lavagnini) y están al alcance de cualquier diccionario masónico publicado. Lo reservado —modos de reconocimiento, palabras, ritualística específica— no figura en este glosario.

**Términos (15):**
1. **Aprendiz** — Primer grado de la masonería simbólica. Su trabajo se centra en el desbastado de la piedra bruta — el simbolismo del trabajo sobre el carácter en sus aspectos más elementales.
2. **Cadena de Unión** — Acto fraternal con que se cierran determinadas tenidas. Su descripción precisa pertenece al ámbito de la práctica ritual y no se publica; su sentido —la afirmación material del lazo entre los hermanos presentes y con los ausentes— sí.
3. **Columnas Jakin y Boaz** — Las dos columnas del pórtico del Templo de Salomón, según el relato bíblico (1 Reyes 7:21). En la masonería simbolizan la dualidad estabilidad/fuerza y son referencia constante del trabajo en Logia.
4. **Constituciones de Anderson** — Texto fundacional de la masonería moderna (1723), redactado por el pastor presbiteriano James Anderson y publicado por la Gran Logia de Londres. Documento de dominio público disponible en nuestra biblioteca.
5. **Gran Arquitecto del Universo (G∴A∴D∴U∴)** — Fórmula con que la masonería regular nombra al Principio Creador. Es deliberadamente abierta: cada hermano la entiende en el marco de su propia tradición religiosa o filosófica.
6. **Gran Logia** — Cuerpo soberano que agrupa a las logias de un territorio. Esta Logia trabaja bajo la jurisdicción de la Gran Logia de la Argentina de Libres y Aceptados Masones.
7. **Logia (Loggia)** — Tanto el cuerpo de masones reunidos en trabajo regular cuanto el lugar donde se reúnen. La palabra remite al sitio donde los antiguos canteros guardaban sus herramientas y deliberaban sobre la obra.
8. **Maestro Masón** — Tercer grado de la masonería simbólica. Quien lo recibe asume la plenitud de los derechos y responsabilidades en la Orden.
9. **Oriente** — Designa la ciudad o territorio donde se asienta una Logia ("Oriente de Buenos Aires"). Por extensión, la parte del Templo donde se sitúa el Venerable Maestro durante los trabajos.
10. **Plancha (Tavola)** — Trabajo escrito que un hermano elabora sobre un tema y presenta a la Logia. Es el modo principal en que el masón da cuenta de su estudio y reflexión.
11. **Profano** — En el lenguaje de la Orden, designa a quien no ha sido iniciado, sin connotación peyorativa. Del latín pro fanum — "delante del templo".
12. **Tenida** — Sesión de trabajo de una Logia. Las hay regulares (sólo para masones) y blancas (públicas).
13. **Tenida blanca** — Sesión pública a la que la Logia invita a no-masones — habitualmente con motivo de una conferencia. Es el principal canal de contacto con el mundo profano.
14. **Tolerancia** — En la tradición masónica, no es indiferencia ni relativismo: es la disposición activa a sostener el diálogo entre hombres de convicciones diversas, a partir del reconocimiento de la dignidad común.
15. **VITRIOL** — Acrónimo latino: Visita Interiora Terrae Rectificando Invenies Occultum Lapidem. "Visita el interior de la tierra y, rectificando, hallarás la piedra oculta." Antigua fórmula alquímica adoptada por la masonería para describir el trabajo del iniciado sobre sí mismo.

### Biblioteca `└→ src/pages/es/masoneria/biblioteca.astro`
- Eyebrow: `Lecturas`
- Título: `Biblioteca`
- Subtitle: `Per chi vuole approfondire`

**Textos fundacionales:**
- Constituciones de Anderson (1723) — texto fundacional de la masonería moderna. Dominio público.
- The Symbolism of Freemasonry — Albert G. Mackey (1869). Dominio público.
- Manual del Aprendiz — Aldo Lavagnini (varias ediciones). Trabajo introductorio clásico.

**Masones argentinos:**
- El hombre mediocre — José Ingenieros (1913). Dominio público.
- Las fuerzas morales — José Ingenieros (1925, póstumo).
- Hacia una moral sin dogmas — José Ingenieros (1917).

**Bibliografía académica:**
- Lappas, Alcibíades — *La Masonería Argentina a través de sus hombres*.
- Ferrer Benimeli, José — *Masonería e Inquisición en Latinoamérica*.
- Devoto, Fernando — *Historia de la inmigración italiana en la Argentina*.

**Stub:** Los enlaces a los PDF en dominio público se cargarán a medida que se digitalicen y verifiquen las versiones autorizadas.

---

## ACTIVIDADES — `/es/actividades/`

### Index `└→ src/pages/es/actividades/index.astro`
- Eyebrow: `Lo visible`
- Título: `Actividades`
- Subtitle: `Quel che la Loggia fa nel mondo profano`

**Lead:** La Logia trabaja regularmente en tenidas reservadas a sus miembros. Pero parte de su vida ocurre en público: tenidas blancas (sesiones abiertas), ciclos culturales, obra de beneficencia. Estas son las puertas por donde el visitante puede asomarse al trabajo de la Logia.

Sub-páginas:
- `Tenidas blancas — calendario`
- `Ciclo cultural — conferencias y libros`
- `Beneficencia — obra social en curso`

**Stub:** El calendario de actividades se actualiza mensualmente. Para inscribirse a una tenida blanca, escribir a unionitaliana12@gmail.com.

### Tenidas blancas `└→ src/pages/es/actividades/tenidas-blancas.astro`
- Eyebrow: `Sesiones públicas`
- Título: `Tenidas blancas`
- Subtitle: `Aperte al mondo profano`

**Lead:** Las tenidas blancas son sesiones públicas a las que la Logia invita a no-masones. Habitualmente con motivo de una conferencia, presentación de libro o aniversario. Es el principal canal de contacto con el mundo profano.

**Stub:** El calendario de próximas tenidas blancas será publicado cuando el equipo de comunicación de la Logia lo confirme. Para inscribirse a la primera, escribir a unionitaliana12@gmail.com.

### Cultura `└→ src/pages/es/actividades/cultura.astro`
- Eyebrow: `Cultura`
- Título: `Ciclo cultural`

**Lead:** La Logia organiza, alternando con sus tenidas regulares, encuentros culturales abiertos al público sobre historia, filosofía, literatura, masonería y cultura italo-argentina. Las invitaciones se anuncian aquí.

**Stub:** Próximas conferencias: en preparación.

### Beneficencia `└→ src/pages/es/actividades/beneficencia.astro`
- Eyebrow: `Obra social`
- Título: `Beneficencia`

**Lead:** La beneficencia masónica es un deber, no una virtud declamada. La Logia destina cada año recursos a obra social — siempre en silencio, siempre en respeto a la dignidad de quien recibe.

> Por la naturaleza de esta tradición, no publicamos nombres de beneficiarios ni detalles individuales. La memoria anual de actividades, en cifras agregadas, se pone a disposición de los hermanos de logias hermanas y de la obediencia.

**Stub:** La memoria 2025 será publicada al cierre del ejercicio anual de la Logia.

---

## INICIACIÓN — `/es/iniciacion/`

### Index `└→ src/pages/es/iniciacion/index.astro`
- Eyebrow: `Quien llama a las puertas`
- Título: `Iniciarse en la Orden`

**Lead (importante — filtra peticionarios serios):**
> Si llegó a esta página por curiosidad pasajera, le pedimos que lea con atención. Iniciarse en la masonería no es inscribirse en una asociación: es asumir un compromiso de años, de presencia regular, de trabajo sobre uno mismo y de lealtad fraterna. La Orden no recluta. Quien peticiona lo hace por decisión propia, sin haber sido invitado, y sabiendo que su petición puede no ser aceptada. Si esto le parece desproporcionado, probablemente lo sea para usted en este momento, y eso también es información valiosa.

**¿Quién puede peticionar?**
- **Mayor de edad** (en uso tradicional, 21 años cumplidos).
- **Hombre libre y de buenas costumbres** — fórmula tradicional. No se refiere a libertad jurídica meramente, sino a autonomía moral; "buenas costumbres" significa que la conducta del peticionario en la vida pública y privada resiste el escrutinio.
- **Profesar creencia en un Principio Creador** — el Gran Arquitecto del Universo. La fórmula es deliberadamente abierta: cada hermano la entiende según su propia tradición religiosa o filosófica.
- **Medios honestos de subsistencia**.
- **Reputación intachable**.

**El proceso, sin eufemismos (5 pasos):**
1. **Petición.** Usted completa el formulario del Atrio. Si su perfil es coherente, será contactado para una primera entrevista.
2. **Entrevistas.** Tres hermanos investigadores designados por la Logia conversarán con usted por separado, en el plazo de varias semanas. Es un diálogo, no un examen.
3. **Plancha de los investigadores.** Los tres hermanos elevan a la Logia un informe escrito.
4. **Balotaje.** La Logia, en tenida regular, vota en escrutinio secreto.
5. **Iniciación.** Si el balotaje es favorable, se fija fecha. La iniciación es una ceremonia que se vive, no que se explica de antemano.

**Lo que se espera de usted:**
- Asistencia regular a las tenidas (en general, dos por mes).
- Estudio personal y elaboración de trabajos escritos (planchas).
- Cuota mensual — la Logia se sostiene con el aporte de sus miembros.
- Discreción: lo trabajado en Logia no se discute fuera de Logia.
- Tiempo: el primer grado dura, en uso, no menos de un año.

**Lo que la masonería no le va a dar:**
> No es un club social, ni una red profesional, ni una asociación de beneficios. Si lo que busca son contactos, oportunidades de negocio, prestigio social o ventajas materiales, no peticione: no encontrará nada de eso, y en el camino le habrá hecho perder tiempo a hermanos que están allí por otras razones. La Orden castiga severamente, hasta con la expulsión, el uso de los lazos fraternos para fines personales.

**Tiempos realistas:**
- De la petición a la iniciación: **entre 6 y 12 meses**, según calendario de la Logia.
- Del primer al segundo grado: no menos de un año.
- Para llegar al grado de Maestro: tres años en condiciones óptimas.

**CTA al Atrio:**
- Eyebrow: `Atrio del Peticionario`
- Título: `¿Decidido a tocar a la puerta?`
- Texto: `El Atrio es el espacio donde el peticionario formaliza su pedido. Le tomará al menos veinte minutos completarlo con la atención que merece. Si puede, hágalo en silencio.`
- Botón: `Entrar al Atrio →`

### Atrio del Peticionario `└→ src/components/atrio/AtrioPeticionario.astro`
> Formulario de 23 campos en 3 umbrales. Por su volumen lo dejamos resumido — pasame una nota si querés extraer todos los labels y helpers.

**Microcopy core:**
- Step 1: `Umbral I — Identidad`
- Step 2: `Umbral II — Introspección`
- Step 3: `Umbral III — Palabra`
- Botón siguiente: `Cruzar el umbral`
- Botón atrás: `Volver atrás`
- Submit: `Golpear las puertas del Templo`
- Pantalla final: `Has sido escuchado.`

**Errores:**
- Genérico: `El llamado no llegó. Reintente en unos minutos.`
- Rate limit: `Demasiados intentos. Intente más tarde.`
- Turnstile: `No pudimos verificar la solicitud. Recargue e intente de nuevo.`
- Datos: `Algunas respuestas son demasiado breves para evaluarlas con seriedad.`

### Confirmación `└→ src/pages/es/iniciacion/confirmacion.astro`
- Eyebrow: `Petición recibida`
- Título: `Hemos recibido su petición`

**Texto:**
> Su petición ingresará a la próxima reunión de tenida regular de la Logia, donde será leída por el Venerable Maestro y registrada. En las semanas siguientes, tres hermanos investigadores serán designados; uno de ellos se pondrá en contacto con usted, por el medio que indicó, para concertar la primera entrevista.
>
> Si entre el envío de esta petición y nuestro contacto transcurren más de seis semanas sin novedad, puede escribirnos a unionitaliana12@gmail.com — los procesos de la Orden son pausados por diseño, pero no opacos.
>
> Le pedimos, en este intervalo, que continúe leyendo. Hay, en la sección Biblioteca de este sitio, textos que puede recorrer con provecho. Si su decisión madura, esas lecturas serán el primer trabajo. Si su decisión se enfría, también habrá ganado algo.
>
> Reciba, con esta línea, el saludo respetuoso de la Logia.

---

## CONTACTO — `/es/contacto/`
`└→ src/pages/es/contacto.astro`

- Eyebrow: `Dos puertas`
- Título: `Contacto`

**Card 1 — Contacto general:**
- Título: `Contacto general`
- Texto: `Consultas, visitas, hermanos visitantes, prensa, investigación académica.`
- Email: `unionitaliana12@gmail.com`

**Card 2 — Peticionarios:**
- Título: `Peticionarios`
- Texto: `Si llegó hasta acá pensando en peticionar, le pedimos leer primero la página de Iniciación.`
- Link: `Ir a Iniciación →`

---

## LEGAL — `/es/legal/`

### Privacidad `└→ src/pages/es/legal/privacidad.astro`
> Documento legal extenso (10 secciones). Texto base ya redactado. Edits sustanciales: avisame y reescribo.

Secciones:
1. Responsable del tratamiento
2. Datos que recolectamos
3. Finalidades
4. Base legal
5. Conservación
6. Cesión a terceros
7. Derechos del titular
8. Medidas de seguridad
9. Menores
10. Inscripción ante AAIP

### Términos `└→ src/pages/es/legal/terminos.astro`
> Documento legal corto (6 secciones).

Secciones: Titularidad · Uso permitido · Propiedad intelectual · Limitación de responsabilidad · Modificación · Jurisdicción

---

## LLAMADOR (CTA flotante)
`└→ src/components/layout/Llamador.astro`

- Tooltip: `Llamar a la puerta`
- Aria-label: `Llamar a las puertas del Templo`
- **Chip 1 — Contactarse:**
  - Título: `Contactarse`
  - Desc: `unionitaliana12@gmail.com`
- **Chip 2 — Atrio (primario):**
  - Título: `Atrio del Peticionario`
  - Desc: `Iniciar el camino · XXIII umbrales`

---

## DATOS — Próxima Tenida (editable directo)
`└→ src/data/upcoming-event.json`

```json
{
  "isPublic": true,
  "date": "2026-05-14T20:30:00-03:00",
  "title": {
    "es": "Cultura italiana en la Argentina del Centenario",
    "it": "Cultura italiana nell'Argentina del Centenario"
  },
  "kind": {
    "es": "Tenida blanca",
    "it": "Tornata bianca"
  },
  "location": "Templo Hijos del Trabajo · Barracas",
  "speaker": "Dr. Hno. (a confirmar)",
  "rsvpUrl": null
}
```

> **Editable directo.** Cambiá `date`, `title.es/it`, `kind`, `speaker`. Si `isPublic: false` o fecha pasada, no se renderiza la franja.

---

## 404
- Título: `404`
- Cita: `"Quien busca, encuentra; pero no siempre lo que buscaba."`
- Link: `Volver al Oriente`
