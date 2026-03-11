import { test, expect } from '@playwright/test';

test('Login thất bại - User bị khóa', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});