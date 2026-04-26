#!/usr/bin/env node
/**
 * Post-build: prefija paths absolutos hardcoded con BASE_PATH.
 * Astro `base` config solo prefija URLs generadas por sus propios helpers
 * (canonical, sitemap, ClientRouter). Strings literales como
 * `<a href="/es/...">` y `<img src="/assets/...">` quedan sin prefix.
 *
 * Este script recorre docs/ y reescribe los HTML.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "./docs";
const BASE = process.env.BASE_PATH ?? "/union-italiana-12";

// Roots de paths absolutos a prefijar
const PATTERNS_TO_PREFIX = [
  "es",
  "it",
  "assets",
  "favicon.svg",
  "sitemap-index.xml",
  "sitemap-0.xml",
  "robots.txt",
  "404.html",
  "_astro",
];

function patchHtml(html) {
  let out = html;
  for (const root of PATTERNS_TO_PREFIX) {
    // ="/es/...  o  ="/es"  pero NO ="/union-italiana-12/es/..."
    // Lookbehind negativo: que NO esté ya el prefix.
    const re = new RegExp(`(["'(])/${root}(?=["'/?# )])`, "g");
    out = out.replace(re, (_m, quote) => `${quote}${BASE}/${root}`);
  }
  // Patch específico para meta refresh / og:url ya hechos con dominio absoluto
  return out;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (extname(e.name) === ".html") {
      const html = await readFile(p, "utf8");
      const patched = patchHtml(html);
      if (patched !== html) await writeFile(p, patched, "utf8");
    } else if (extname(e.name) === ".xml") {
      // Sitemap también
      const xml = await readFile(p, "utf8");
      const patched = patchHtml(xml);
      if (patched !== xml) await writeFile(p, patched, "utf8");
    }
  }
}

walk(ROOT)
  .then(() => console.log(`✓ Post-build base prefix applied (${BASE})`))
  .catch((e) => { console.error(e); process.exit(1); });
