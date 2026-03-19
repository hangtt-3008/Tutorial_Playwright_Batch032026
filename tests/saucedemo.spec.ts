import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Mở trang login
  await page.goto('https://www.saucedemo.com/');

  // Nhập username
  await page.fill('#user-name', 'standard_user');

  // Nhập password
  await page.fill('#password', 'secret_sauce');

  // Click login
  await page.click('#login-button');
});

test.afterEach(async ({ page }, testInfo) => {
  // Nếu test fail thì chụp screenshot
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`,
      fullPage: true,
    });
  }

  // Logout
  await page.click('#react-burger-menu-btn'); // mở menu
  await page.click('#logout_sidebar_link');   // click logout
});


// 🧪 Test 1: Kiểm tra URL
test('Verify URL after login contains /inventory', async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory/);
});


// 🧪 Test 2: Kiểm tra sản phẩm đầu tiên
test('Verify first product name', async ({ page }) => {
  const firstProduct = page.locator('.inventory_item_name').first();
  await expect(firstProduct).toHaveText('Sauce Labs Backpack');
});