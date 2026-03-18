import { test, expect } from '@playwright/test';

test('Todo app thêm hoàn thành và xóa task', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Thêm task
 // await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Học Playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Verify thêm thành công
  await expect(page.locator('.todo-list li')).toHaveCount(1);
  await expect(page.locator('.todo-list li')).toContainText('Học Playwright');

  //HOàn thành task
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

   // Xóa task (phải hover trước)
  await page.getByText('Học Playwright').hover() 
  await page.getByRole('button', { name: 'Delete' }).click();

    // ✅ Verify xóa thành công
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});