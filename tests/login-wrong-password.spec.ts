import {test, expect} from '@playwright/test';

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