import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const eventos = await getCollection("eventos", ({ id }) => id.startsWith("es/"));
  return rss({
    title: "R∴L∴ Unión Italiana N°12 — Actividades",
    description: "Próximas reuniones abiertas y actividades culturales de la Logia.",
    site: context.site!,
    items: eventos.map((e) => ({
      title: e.data.title,
      pubDate: new Date(e.data.date),
      description: e.data.excerpt ?? "",
      link: `/es/actividades/${e.id.replace("es/", "").replace(/\.md$/, "")}/`,
    })),
    customData: "<language>es-AR</language>",
  });
}
