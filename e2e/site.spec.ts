import { test, expect } from "@playwright/test";

test("/ sends Spanish browsers to /es and others to /en", async ({ browser }) => {
  // The browser's own locale drives Accept-Language, as for a real visitor.
  for (const [locale, lang] of [["es-PA", "es"], ["en-US", "en"]]) {
    const context = await browser.newContext({ locale });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page).toHaveURL(`/${lang}`);
    await context.close();
  }
});

for (const lang of ["es", "en"]) {
  test(`/${lang} renders every section with no errors or broken images`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto(`/${lang}`);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("h1")).toBeVisible();
    for (const id of ["projects", "about", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    // Scroll through so lazy images load, then check none failed.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
    });
    const broken = await page.$$eval("img", (imgs) =>
      imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
    );
    expect(broken).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("language switch keeps the section the visitor is on", async ({ page }) => {
  await page.goto("/en#contact");
  await page.getByRole("button", { name: "Switch to Spanish" }).click();
  await expect(page).toHaveURL("/es#contact");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
});

test("unknown paths return a localized 404", async ({ page }) => {
  const res = await page.goto("/en/does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByText("This page doesn't exist.")).toBeVisible();
});

test("resume downloads and email CTA point to real targets", async ({ page, request }) => {
  for (const file of ["/cv-es.pdf", "/cv-en.pdf"]) {
    const res = await request.get(file);
    expect(res.status(), file).toBe(200);
    expect(res.headers()["content-type"]).toContain("pdf");
  }
  await page.goto("/en");
  await expect(page.locator('#contact a[href^="mailto:"]').first()).toBeVisible();
});
