import { expect } from '@playwright/test';
import { test } from './fixtures/login.fixture';

// Test 1
test('Check dashboard', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText('Swag Labs')).toBeVisible();
});

// Test 2
test('Verify inventory', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText('Products')).toBeVisible();

  const items = loggedInPage.locator('[data-test="inventory-item"]');
  await expect(items).toHaveCount(6);
});

//Test add to cart
test('Add to cart', async ({ loggedInPage }) => {
  await loggedInPage.getByText('Sauce Labs Backpack').click();

  await loggedInPage.getByRole('button', { name: 'Add to cart' }).click();

  await expect(loggedInPage.locator('.shopping_cart_badge')).toHaveText('1');
});