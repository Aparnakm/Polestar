import { test, expect } from "@playwright/test";
import exp from "constants";

test("test", async ({ page }) => {
  await page.goto("https://www.polestar.com/global/developer/get-started/");
  await page.getByRole("button", { name: "Accept all" }).click();

  const pageURL = page.url();
  console.log("Page url is: ", pageURL);
  await expect(page).toHaveURL("https://www.polestar.com/global/developer/get-started/");

  const pageTitle = page.title();
  await expect(page).toHaveTitle("Pure progressive performance | Polestar");

  await page.getByRole("link", { name: "Return Home" }).click();
  const learnMore = await page.locator("//span[@id='CI2U8EIPRDmNVTVRAr4P5Q']");
  await expect(learnMore).toContainText("Learn more");
  await learnMore.click();
 
  await page.getByRole("link", { name: "Stay up to date" }).click();
  await page.waitForTimeout(5000);
  await page.locator("//input[@id='76950913--first-name']").fill("Anna");
  await page.locator("//input[@id='76950913-last-name']").fill("John");
  await page.locator("//input[@id='76950914']").fill("abcxyz@gmail.com");
  await page.waitForTimeout(5000);
  await page.locator("(//label[@class='css-9pq9cn'])[1]").click();
  //await page.waitForTimeout(5000);
  await page.getByRole("option", { name: "Algeria" }).click();
  await page.locator(".css-1q367wt").check();
  await page.getByRole("button", { name: "Subscribe" }).click();
  await page.waitForTimeout(5000);
  await expect(await page.locator("div[class='css-bxqx5h'] h2[class='css-1euduvz']")).toHaveText("Confirm your subscription");

  await page.close();
});
