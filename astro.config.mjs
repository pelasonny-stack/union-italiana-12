// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Soporta dual deploy:
// - GitHub Pages (default actual): SITE_URL + BASE_PATH = "/union-italiana-12", outDir = "./docs"
// - Netlify (cuando DEPLOY_TARGET=netlify): root path, outDir = "./dist"
const isNetlify = process.env.DEPLOY_TARGET === "netlify" || process.env.NETLIFY === "true";
const SITE_URL = process.env.SITE_URL ?? (isNetlify ? "https://union-italiana-12.netlify.app" : "https://pelasonny-stack.github.io");
const BASE = process.env.BASE_PATH ?? (isNetlify ? "/" : "/union-italiana-12");

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  outDir: isNetlify ? "./dist" : "./docs",
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
