// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Triple deploy:
// - GitHub Pages (default): base=/union-italiana-12, outDir=docs
// - Cloudflare Pages (DEPLOY_TARGET=cloudflare): base=/, outDir=dist, custom domain
// - Firebase Hosting (DEPLOY_TARGET=firebase): idem, custom domain
const isCloudflare = process.env.DEPLOY_TARGET === "cloudflare" || process.env.CF_PAGES === "1";
const isFirebase = process.env.DEPLOY_TARGET === "firebase";
const isCustomDomain = isCloudflare || isFirebase;

const SITE_URL = process.env.SITE_URL ??
  (isCustomDomain ? "https://logiaunionitaliana12.com.ar" : "https://pelasonny-stack.github.io");
const BASE = process.env.BASE_PATH ?? (isCustomDomain ? "/" : "/union-italiana-12");

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  outDir: isCustomDomain ? "./dist" : "./docs",
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
