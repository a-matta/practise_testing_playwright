import { test, expect } from "@playwright/test";

test("Login test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator("nav-sign-in");
  await page.locator("email").fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01");
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Jane Doe"
  );
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account"
  );
});
