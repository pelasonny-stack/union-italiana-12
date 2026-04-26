import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const eventi = await getCollection("eventos", ({ id }) => id.startsWith("it/"));
  return rss({
    title: "R∴L∴ Unione Italiana N°12 — Attività",
    description: "Prossime riunioni aperte e attività culturali della Loggia.",
    site: context.site!,
    items: eventi.map((e) => ({
      title: e.data.title,
      pubDate: new Date(e.data.date),
      description: e.data.excerpt ?? "",
      link: `/it/attivita/${e.id.replace("it/", "").replace(/\.md$/, "")}/`,
    })),
    customData: "<language>it-IT</language>",
  });
}
