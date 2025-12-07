import { test, expect } from '@playwright/test';

test('should navigate to the A/B testing page', async ({ page }) => {
    //Given
    await page.goto('/');
    //When
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    //Then
    await expect(page).toHaveURL('/abtest');
    await expect(page.getByRole('heading', { level: 3 }))
        .toHaveText(/A\/B Test/);
});