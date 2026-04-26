import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Smoke tests — Unión Italiana N°12", () => {
  test("/ redirects to /es/", async ({ page }) => {
    const res = await page.goto("/");
    expect(res?.url()).toContain("/es/");
  });

  test("Home ES has hero and three doors", async ({ page }) => {
    await page.goto("/es/");
    await expect(page.locator("h1")).toContainText("Al Oriente de Buenos Aires");
    await expect(page.locator(".door")).toHaveCount(3);
  });

  test("Home IT has Italian content", async ({ page }) => {
    await page.goto("/it/");
    await expect(page.locator("h1")).toContainText("All'Oriente di Buenos Aires");
  });

  test("Lang switcher routes correctly", async ({ page }) => {
    await page.goto("/es/la-logia/historia/");
    const switcher = page.locator(".lang-switcher a:not(.is-active)");
    await switcher.first().click();
    await expect(page).toHaveURL(/\/it\//);
  });

  test("Atrio del Peticionario muestra umbrales", async ({ page }) => {
    await page.goto("/es/iniciacion/peticion/");
    await expect(page.locator("[data-step='1']")).toBeVisible();
    await expect(page.locator("[data-step='2']")).not.toBeVisible();
    await expect(page.locator("[data-step='3']")).not.toBeVisible();
  });

  test("Glosario lista 15 términos", async ({ page }) => {
    await page.goto("/es/masoneria/glosario/");
    const dts = page.locator(".glossary dt");
    await expect(dts).toHaveCount(15);
  });

  test("Política de privacidad ES carga", async ({ page }) => {
    await page.goto("/es/legal/privacidad/");
    await expect(page.locator("h1")).toContainText("Política de privacidad");
  });

  test("a11y — Home ES sin violaciones críticas", async ({ page }) => {
    await page.goto("/es/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
  });

  test("a11y — Atrio del Peticionario sin violaciones críticas", async ({ page }) => {
    await page.goto("/es/iniciacion/peticion/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
  });
});
