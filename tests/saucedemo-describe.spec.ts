import { test, expect } from '@playwright/test';


// NHÓM A – Kiểm tra sản phẩm
test.describe('Product tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // đảm bảo vào inventory
    await page.waitForURL('**/inventory.html');
  });

  // Test 1: Kiểm tra số lượng sản phẩm
  test('Verify number of products', async ({ page }) => {
    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
  });

  //  Test 2: Kiểm tra tên sản phẩm đầu tiên
  test('Verify first product name', async ({ page }) => {
    const firstProduct = page.locator('.inventory_item_name').first();
    await expect(firstProduct).toHaveText('Sauce Labs Backpack');
  });

});


// NHÓM B – Kiểm tra giỏ hàng
test.describe('Cart tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.waitForURL('**/inventory.html');

    // thêm sản phẩm đầu tiên vào giỏ
    await page.locator('.inventory_item').first()
      .locator('button')
      .click();
  });

  // Test 1: Kiểm tra icon giỏ hàng có số 1
  test('Verify cart badge shows 1 item', async ({ page }) => {
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });

  // Test 2: Kiểm tra sản phẩm trong giỏ
  test('Verify product in cart', async ({ page }) => {
    await page.click('.shopping_cart_link');

    const cartItem = page.locator('.inventory_item_name');
    await expect(cartItem).toHaveText('Sauce Labs Backpack');
  });

});