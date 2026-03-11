import { test, expect } from '@playwright/test';

test('Login thất bại - Bỏ trống username', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});