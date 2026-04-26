// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Dual deploy:
// - GitHub Pages (default): SITE=pelasonny-stack.github.io + base=/union-italiana-12 + outDir=docs
// - Firebase Hosting (DEPLOY_TARGET=firebase): SITE=logiaunionitaliana12.com.ar + base=/ + outDir=dist
const isFirebase = process.env.DEPLOY_TARGET === "firebase";
const SITE_URL = process.env.SITE_URL ??
  (isFirebase ? "https://logiaunionitaliana12.com.ar" : "https://pelasonny-stack.github.io");
const BASE = process.env.BASE_PATH ?? (isFirebase ? "/" : "/union-italiana-12");

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  outDir: isFirebase ? "./dist" : "./docs",
  trailingSlash: "always",
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
