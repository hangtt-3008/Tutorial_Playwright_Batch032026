import { test, expect } from '@playwright/test';

test.describe('Hook order demo', () => {

  // beforeAll – chạy 1 lần duy nhất
  test.beforeAll(async () => {
    console.log('Bắt đầu chạy nhóm test');
  });

  //  beforeEach – chạy trước mỗi test
  test.beforeEach(async ({ page }) => {
    console.log('beforeEach: Login');

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.waitForURL('**/inventory.html');
  });

  // afterEach – chạy sau mỗi test
  test.afterEach(async ({ page }, testInfo) => {
    console.log(`afterEach: ${testInfo.title}`);

    // nếu fail thì chụp screenshot
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true,
      });
      console.log('Đã chụp screenshot do test FAIL');
    }
  });

  // afterAll – chạy 1 lần cuối cùng
  test.afterAll(async () => {
    console.log('Kết thúc nhóm test');
  });


  // Test 1 – PASS
  test('Verify URL contains inventory', async ({ page }) => {
    console.log('Running Test 1');

    await expect(page).toHaveURL(/.*inventory/);
  });


  // Test 2 – CỐ TÌNH FAIL
  test('Verify wrong product name (fail case)', async ({ page }) => {
    console.log('Running Test 2');

    const firstProduct = page.locator('.inventory_item_name').first();

    // cố tình sai
    await expect(firstProduct).toHaveText('Sai tên sản phẩm');
  });

});