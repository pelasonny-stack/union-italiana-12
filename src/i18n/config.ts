import { LOCALES, DEFAULT_LOCALE, isLocale, type Locale } from "@union12/shared";

export { LOCALES, DEFAULT_LOCALE, isLocale, type Locale };

export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  it: "Italiano",
};

export const LOCALE_LANG_TAG: Record<Locale, string> = {
  es: "es-AR",
  it: "it-IT",
};

/**
 * Tabla bidireccional de slugs traducidos.
 * Key = slug ES, value = slug IT. Lookup inverso construido al vuelo.
 */
const SLUG_MAP_ES_TO_IT: Record<string, string> = {
  "la-logia": "la-loggia",
  "masoneria": "massoneria",
  "actividades": "attivita",
  "ingreso": "ingresso",
  "contacto": "contatti",
  "legal": "legale",
  // Subpáginas
  "historia": "storia",
  "miembros-ilustres": "membri-illustri",
  "templo": "tempio",
  "vinculo-italiano": "legame-italiano",
  "auspicios": "auspici",
  "que-es": "cose",
  "principios": "principi",
  "glosario": "glossario",
  "biblioteca": "biblioteca",
  "reuniones-abiertas": "riunioni-aperte",
  "cultura": "cultura",
  "beneficencia": "beneficenza",
  "peticion": "petizione",
  "confirmacion": "conferma",
  "privacidad": "privacy",
  "terminos": "termini",
  "aviso-reglamentario": "avviso-regolamentare",
  "blog": "notizie",
};

const SLUG_MAP_IT_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_MAP_ES_TO_IT).map(([es, it]) => [it, es]),
);

/**
 * Devuelve la URL "hermana" en el otro idioma para el path actual.
 * Traduce cada segmento del path usando la tabla bilingüe.
 * Si un segmento no está en la tabla, lo deja igual (asumimos slug compartido).
 */
export function alternateLocaleUrl(currentPath: string, target: Locale): string {
  // Match `/es/...` o `/it/...` y captura el resto del path
  const match = currentPath.match(/^\/(es|it)(\/.*)?$/);
  if (!match || !match[1]) return `/${target}/`;
  const sourceLang = match[1] as Locale;
  const rest = match[2] ?? "/";

  // Si target es el mismo lang actual, no hay cambio
  if (sourceLang === target) {
    return currentPath;
  }

  // Traducir cada segmento
  const map = sourceLang === "es" ? SLUG_MAP_ES_TO_IT : SLUG_MAP_IT_TO_ES;
  const translated = rest
    .split("/")
    .map((seg) => (seg && map[seg] ? map[seg] : seg))
    .join("/");

  // Asegurar trailing slash si tenía
  const out = `/${target}${translated}`;
  return out;
}

export function getLocaleFromPath(path: string): Locale {
  const m = path.match(/^\/(es|it)(\/|$)/);
  if (m && m[1] && isLocale(m[1])) return m[1];
  return DEFAULT_LOCALE;
}
