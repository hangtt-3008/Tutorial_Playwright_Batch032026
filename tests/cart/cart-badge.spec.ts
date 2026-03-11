import { test, expect } from '@playwright/test';

test('Cart badge increases when adding products', async ({ page }) => {

  // 1. Truy cập trang login
  await page.goto('https://www.saucedemo.com/');

  // 2. Đăng nhập
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Kiểm tra login thành công
  await expect(page).toHaveURL(/inventory/);

  // 4. Thêm sản phẩm thứ 1
  await page.locator('.inventory_item button').first().click();

  // 5. Kiểm tra badge = 1
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // 6. Thêm sản phẩm thứ 2
  await page.locator('.inventory_item button').nth(1).click();

  // 7. Kiểm tra badge = 2
  await expect(cartBadge).toHaveText('2');

});