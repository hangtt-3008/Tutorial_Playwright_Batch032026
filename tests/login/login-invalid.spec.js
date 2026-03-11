
import {test, expect} from '@playwright/test';


//login wrong password
test('Login với password sai', async ({page}) => {

    // Mở trang login
    await page.goto('https://www.saucedemo.com')

    // Nhập username và password sai
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    
    // Click login
    await page.click('#login-button');

    // Kiểm tra hiển thị lỗi
    await expect(page.locator('[data-test="error"]')).toBeVisible();

});

//login empty username
test('Login thất bại - Bỏ trống username', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

//locked user
test('Login thất bại - User bị khóa', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});