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
      filter: (page) =>
        !page.includes("/ingreso/confirmacion") &&
        !page.includes("/ingresso/conferma") &&
        !page.includes("/legal/") &&
        !page.includes("/legale/"),
      serialize(item) {
        const url = item.url;
        // Home: máxima prioridad
        if (/\/(es|it)\/?$/.test(url)) {
          item.priority = 1.0;
          item.changefreq = /** @type {any} */ ("weekly");
        }
        // Ingreso: alta intención de conversión
        else if (/\/(ingreso|ingresso)\/?$/.test(url)) {
          item.priority = 0.9;
          item.changefreq = /** @type {any} */ ("monthly");
        }
        // Templo + Historia: contenido pillar
        else if (/(templo|tempio|historia|storia|que-es|cose|miembros-ilustres|membri-illustri)/.test(url)) {
          item.priority = 0.8;
          item.changefreq = /** @type {any} */ ("monthly");
        }
        // Resto de secciones internas
        else if (/\/(la-logia|la-loggia|masoneria|massoneria|actividades|attivita)\//.test(url)) {
          item.priority = 0.7;
          item.changefreq = /** @type {any} */ ("monthly");
        }
        // Planchas / tavole — contenido recurrente
        else if (/\/(planchas|tavole)/.test(url)) {
          item.priority = 0.6;
          item.changefreq = /** @type {any} */ ("weekly");
        }
        // Default
        else {
          item.priority = 0.5;
          item.changefreq = /** @type {any} */ ("monthly");
        }
        item.lastmod = new Date().toISOString();
        return item;
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
