import { expect, test } from '@playwright/test';

test('loads the decision ledger and updates evidence when a row is selected', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/LayerChoiceWhy/);
  await expect(page.getByRole('heading', { name: 'LayerChoiceWhy' })).toBeVisible();
  await expect(page.getByRole('listitem')).toHaveCount(12);
  await expect(page.getByRole('heading', { name: 'Framework' })).toBeVisible();

  await page.getByRole('listitem').nth(5).click();
  await expect(page.getByRole('heading', { name: 'Motion', exact: true })).toBeVisible();
  await expect(page.getByText('High-quality interaction language and choreography.')).toBeVisible();
});

test('keeps the ledger usable on a narrow viewport', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'LayerChoiceWhy' })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
