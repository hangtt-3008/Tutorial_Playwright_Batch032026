import { expect, test } from "@playwright/test";

test("register playwright", async ({ page }) => {

  await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

  // input
  await page.locator("#username").fill("hangttb");
  await page.locator("#email").fill("tran.thi.hang-b@sun-asterisk.com");

  // Gender
  await page.locator("#female").check();
  await expect(page.locator("#female")).toBeChecked();

  // Hobbies
  await page.locator("#reading").check();
  await page.locator("#cooking").check();

  await expect(page.locator("#reading")).toBeChecked();
  await expect(page.locator("#cooking")).toBeChecked();

  // dropdown
  await page.selectOption("#interests", "technology");
  await page.selectOption("#country", "canada");

  // DOB
  await page.locator("#dob").fill("1996-09-26");

  // submit
  await page.getByRole("button", { name: "Register" }).click();

  // verify user in table
  await expect(page.locator("table")).toContainText("hangttb");

});