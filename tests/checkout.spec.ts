import { test, expect } from "@playwright/test";

test.describe("Auth Checkout", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });
});

test("Buy Now Pay Later", async ({ page }) => {
  await page.locator("nav-sign-in");
  await page.locator("email").fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01");
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Jane Doe"
  );
  await page.getByTestId("Pliers").click();
  await page.getByTestId("add-to-cart").click();
  await expect(page.getByTestId("cart-quantity")).toHaveText("1");
  await page.getByTestId("cart-quantity").click();
  await page.getByTestId("proceed-1").click();
  await page.locator("email").fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01");
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="login-submit"]').click();
  await page.getByTestId("proceed-2").click();
  await page.locator('[data-test="state"]').click();
  await page.locator('[data-test="state"]').fill("Finland");
  await page.locator('[data-test="postal_code"]').fill("00533");
  await page.locator('[data-test="proceed-3"]').click();
});
