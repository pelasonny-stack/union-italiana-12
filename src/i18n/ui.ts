import es from "./es.json";
import it from "./it.json";
import type { Locale } from "./config";

const dictionaries = { es, it } as const;

export type UIKey = keyof typeof es;

export function t(key: UIKey, lang: Locale): string {
  const dict = dictionaries[lang] as Record<string, string>;
  return dict[key] ?? (dictionaries.es as Record<string, string>)[key] ?? key;
}
