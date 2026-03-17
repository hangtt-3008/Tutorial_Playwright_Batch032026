import { test, expect } from '@playwright/test';

test('Manage Todo List', async ({ page }) => {

  // 1. Mở trang
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.locator('.new-todo');
  const items = page.locator('.todo-list li');

  // 2. Thêm 3 task
  await input.fill('Task A');
  await input.press('Enter');

  await input.fill('Task B');
  await input.press('Enter');

  await input.fill('Task C');
  await input.press('Enter');

  // Verify đã thêm đủ
  await expect(items).toHaveCount(3);

  // 3. Tick task thứ 2 (Task B)
  const taskB = items.nth(1);
  await taskB.locator('.toggle').check();

  // Verify task B đã completed
  await expect(taskB).toHaveClass(/completed/);

  // 4. Verify task đầu tiên là Task A
  await expect(items.first()).toContainText('Task A');

  // 5. Xóa Task C
  const taskC = items.filter({ hasText: 'Task C' });

  await taskC.hover();
  await taskC.locator('.destroy').click();

  // Verify Task C đã bị xóa khỏi DOM
  await expect(taskC).toHaveCount(0);

  // Verify còn lại 2 task
  await expect(items).toHaveCount(2);

});