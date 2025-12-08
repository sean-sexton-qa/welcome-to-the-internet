import { test, expect } from '@playwright/test';

test('should navigate to the Add/Remove Elements page', async ({ page }) => {
  //Given
  await page.goto('/');
  //When
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  //Then
  await expect(page).toHaveURL('/add_remove_elements/')
  await expect(page.getByRole('heading', { level: 3 }))
    .toHaveText("Add/Remove Elements");
});