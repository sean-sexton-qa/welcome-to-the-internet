import { test, expect } from '@playwright/test';

test('should load the list of available examples as the landing page', async ({ page }) => {
  //When
  await page.goto('/');

  //Then
  await expect(page).toHaveURL('/')
  await expect(page).toHaveTitle(/The Internet/);
  await expect(page.getByRole("heading", { name: "Welcome to the-internet" })).toBeVisible();
});

test('should show the list of available examples', async ({ page }) => {
  //When
  await page.goto('/');

  const expectedExamples = [
    'A/B Testing',
    'Add/Remove Elements',
    'Basic Auth',
    'Broken Images',
    'Challenging DOM',
    'Checkboxes',
    'Context Menu',
    'Digest Authentication',
    'Disappearing Elements',
    'Drag and Drop',
    'Dropdown',
    'Dynamic Content',
    'Dynamic Controls',
    'Dynamic Loading',
    'Entry Ad',
    'Exit Intent',
    'File Download',
    'File Upload',
    'Floating Menu',
    'Forgot Password',
    'Form Authentication',
    'Frames',
    'Geolocation',
    'Horizontal Slider',
    'Hovers',
    'Infinite Scroll',
    'Inputs',
    'JQuery UI Menus',
    'JavaScript Alerts',
    'JavaScript onload event error',
    'Key Presses',
    'Large & Deep DOM',
    'Multiple Windows',
    'Nested Frames',
    'Notification Messages',
    'Redirect Link',
    'Secure File Download',
    'Shadow DOM',
    'Shifting Content',
    'Slow Resources',
    'Sortable Data Tables',
    'Status Codes',
    'Typos',
    'WYSIWYG Editor'
  ];

  //Then
  // This works but it exits at the first missing item.
  // for (const example of expectedExamples) {
  //   await expect(page.getByRole('link', { name: example })).toBeVisible();
  // }

  // This solution instead will check each item in the list and then return a complete list of missing items.
  const missing: string[] = [];

  for (const example of expectedExamples) {
    const locator = page.getByRole('link', { name: example });

    // Instead of expect(...).toBeVisible(), we check manually.
    const count = await locator.count();
    if (count === 0) {
      missing.push(example);
    }
  }

  if (missing.length > 0) {
    // Fail once with a complete list.
    throw new Error(
      `The following expected links were NOT found on the landing page:\n\n` +
      missing.map(x => `• ${x}`).join('\n')
    );
  }
});