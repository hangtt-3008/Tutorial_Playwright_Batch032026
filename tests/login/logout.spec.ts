import { test, expect } from '@playwright/test';

test('Login and Logout flow', async ({ page }) => {

  // 1. Truy cập trang login
  await page.goto('https://www.saucedemo.com/');

  // 2. Đăng nhập
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Kiểm tra login thành công
  await expect(page).toHaveURL(/inventory/);

  // 4. Mở menu sidebar
  await page.click('#react-burger-menu-btn');

  // 5. Click logout
  await page.click('#logout_sidebar_link');

  // 6. Kiểm tra quay lại trang login
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});