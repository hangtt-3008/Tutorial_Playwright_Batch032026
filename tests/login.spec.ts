import { test, expect } from '@playwright/test';
import { user } from '../data/user';

test('Login with registered account', async ({ page }) => {

  await page.goto('https://buggy.justtestit.org/');

  await page.locator('input[name="login"]').fill(user.username);
  await page.locator('input[name="password"]').fill(user.password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(`Hi, ${user.firstName}`)).toBeVisible();

});