import { test, expect } from '@playwright/test';

test('should navigate to the Add/Remove Elements page', async ({ page }) => {
  //Given
  await page.goto('/');
  //When
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  //Then
  await expect(page).toHaveURL('/add_remove_elements/');
  await expect(page.getByRole('heading', { level: 3 }))
    .toHaveText("Add/Remove Elements");
});

test('should add a new delete button when clicking "Add Element"', async ({ page }) => {
  //Given
  await page.goto('/add_remove_elements/');
  //When
  await page.getByRole('button', { name: 'Add Element'}).click();
  //Then
  await expect(page.getByRole('button', { name: 'Delete'})).toBeVisible();
});

test('should add multiple delete buttons when continuing to click "Add Element"', async ({ page }) => {
  //Given
  await page.goto('/add_remove_elements/');
  //When
  const addElementButton = page.getByRole('button', { name: 'Add Element'});
  await addElementButton.click();
  await addElementButton.click();
  await addElementButton.click();
  //Then
  await expect(page.getByRole('button', { name: 'Delete'})).toHaveCount(3);
});