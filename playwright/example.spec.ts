import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("should display the title and subtitle", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Check for the main heading
    await expect(page.getByRole("heading", { name: "Next.js Starter" })).toBeVisible();

    // Check for the subtitle text
    await expect(page.getByText("A simple starter for Next.js")).toBeVisible();
  });
});
