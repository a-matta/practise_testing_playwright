import { test, expect } from "@playwright/test";

test.describe("Home Page with No Auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("visual test", async ({ page }) => {
    await expect(page).toHaveScreenshot("home-page-no-auth.png");
  });

  test("Check Sign In", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).toContainText("Sign In");
  });
  test("Validate Page Title", async ({ page }) => {
    await expect(
      page.getByTitle("Practice Software Testing - Toolshop - v5.0")
    );
  });
  test("Search for Thor Hammer", async ({ page }) => {
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
    expect(await productGrid.getByRole("link").count()).toBe(9);
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    expect(await productGrid.getByRole("link").count()).toBe(1);
    await expect(page.getByAltText("Thor Hammer"));
  });
});

test("visual test authorised", async ({ page }) => {
  await expect(page).toHaveScreenshot("home-page-customer01.png");
});

test.describe("Home page customer 01 auth", () => {
  test.use({ storageState: ".auth/customer01.json" });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });
  test("check customer 01 signed in", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
    await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
  });
});
