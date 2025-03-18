import { test, expect } from "@playwright/test";

test("GET/products", async ({ request }) => {
  const apiURL = "https://api.practicesoftwaretesting.com";
  const response = await request.get(apiURL + "/products");

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
  expect(body.data.length).toBe(9);
  expect(body.total).toBe(50);
  expect(body.per_page).toBe(9);
});
