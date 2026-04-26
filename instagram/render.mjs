#!/usr/bin/env node
/**
 * Render Instagram assets — toma cada HTML en templates/ y genera PNG
 * en output/ con resolución exacta para IG (posts 1080x1080,
 * stories 1080x1920, highlights 1080x1080).
 */
import { chromium } from "@playwright/test";
import { readdir, mkdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = __dirname;

const targets = [
  { dir: "posts",      width: 1080, height: 1080 },
  { dir: "stories",    width: 1080, height: 1920 },
  { dir: "highlights", width: 1080, height: 1080 },
];

const browser = await chromium.launch();
const context = await browser.newContext({ deviceScaleFactor: 1 });

for (const t of targets) {
  const inputDir = join(ROOT, "templates", t.dir);
  const outputDir = join(ROOT, "output", t.dir);
  await mkdir(outputDir, { recursive: true });

  let files;
  try { files = await readdir(inputDir); }
  catch { console.log(`  skip ${t.dir} (no folder)`); continue; }

  const htmls = files.filter(f => f.endsWith(".html"));
  for (const html of htmls) {
    const inFile = join(inputDir, html);
    const outFile = join(outputDir, basename(html, ".html") + ".png");
    const page = await context.newPage({ viewport: { width: t.width, height: t.height } });
    await page.setViewportSize({ width: t.width, height: t.height });
    await page.goto(`file://${inFile}`);
    await page.waitForLoadState("networkidle");
    // Espera a que las fonts carguen (Google Fonts via CSS)
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: outFile, fullPage: false, type: "png", omitBackground: false });
    await page.close();
    console.log(`  ✓ ${t.dir}/${basename(outFile)}`);
  }
}

await browser.close();
console.log("\n✓ Listo. Assets en instagram/output/");
