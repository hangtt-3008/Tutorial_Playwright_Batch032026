import { test, expect } from '@playwright/test';

test('Login thành công', async ({ page }) => {

  // Mở trang login
  await page.goto('https://www.saucedemo.com');

  // Nhập username và password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login
  await page.click('#login-button');

  // Kiểm tra đã chuyển sang trang Products
  await expect(page).toHaveURL(/inventory/);

  // Kiểm tra title hiển thị đúng
  await expect(page.locator('.title')).toHaveText('Products');
});