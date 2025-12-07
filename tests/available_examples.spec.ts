import { test, expect } from '@playwright/test';

test('Landing page shows a list of examples.', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/The Internet/);
});