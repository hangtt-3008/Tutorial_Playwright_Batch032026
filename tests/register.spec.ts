import { test, expect } from '@playwright/test';
import { user } from '../data/user';

test('Register new account', async ({ page }) => {

  await test.step('Open register page', async () => {
    await page.goto('https://buggy.justtestit.org/register');
  });

  await test.step('Verify register form UI', async () => {
    await expect(page.locator('h2')).toHaveText('Register with Buggy Cars Rating');

    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#firstName')).toBeVisible();
    await expect(page.locator('#lastName')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#confirmPassword')).toBeVisible();
  });

  await test.step('Fill register form', async () => {
    await page.locator('#username').fill(user.username);
    await page.locator('#firstName').fill(user.firstName);
    await page.locator('#lastName').fill(user.lastName);
    await page.locator('#password').fill(user.password);
    await page.locator('#confirmPassword').fill(user.password);
  });

  await test.step('Submit register', async () => {
    await page.getByRole('button', { name: 'Register' }).click();
  });

  await test.step('Verify register success', async () => {
    await expect(page.locator('.result')).toBeVisible();
  });

});