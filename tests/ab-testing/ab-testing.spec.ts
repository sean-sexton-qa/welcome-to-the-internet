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

test('should show the correct A/B Testing header for all variants', async ({ page }) => {
    //When
    await page.goto('/abtest');
    //Then
    const heading = page.getByRole('heading', { level: 3 });

    const allowedHeadings = [
        'A/B Test Variation 1',
        'A/B Test Control'
    ];

    const text = await heading.innerText();
    expect(allowedHeadings).toContain(text);
});

test('should show the correct A/B Testing description', async ({ page }) => {
    //When
    await page.goto('/abtest');
    //Then
    await expect(
        page.locator('#content .example p')
    ).toContainText('Also known as split testing');
});