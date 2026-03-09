import { test, expect } from '@playwright/test';

test('Search on W3Schools', async ({ page }) => {

  // 1. Truy cập website
  await page.goto('https://www.w3schools.com/');

  // 2. Locate search textbox
  const searchBox = page.locator('#tnb-google-search-input');

  // 3. Nhập giá trị tìm kiếm
  await searchBox.fill('HTML');

  //Làm thêm Verify search box có dữ liệu
  await expect(searchBox).toHaveValue('HTML');

  // Check thêm Verify page vẫn còn (test hoàn tất thành công)
  await expect(page).toHaveURL('https://www.w3schools.com/');

});