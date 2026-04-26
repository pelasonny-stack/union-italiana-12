// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE_URL = process.env.SITE_URL ?? "https://unionitaliana12.org.ar";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "ignore",
  output: "static",
  prefetch: { defaultStrategy: "viewport" },

  // i18n manejado manualmente vía estructura src/pages/es/ y src/pages/it/
  // (con slugs traducidos: /es/la-logia/ ↔ /it/la-loggia/).
  // El sitemap integration recibe hreflang config aparte.

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-AR", it: "it-IT" },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    contentIntellisense: true,
  },
});
