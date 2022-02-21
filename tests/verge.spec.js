const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://www.google.com/search?q=verge&oq=verge&aqs=chrome..69i57.760j0j2&sourceid=chrome&ie=UTF-8
  await page.goto('https://www.google.com/search?q=verge&oq=verge&aqs=chrome..69i57.760j0j2&sourceid=chrome&ie=UTF-8');

  // Click text=The Vergehttps://www.theverge.comhttps://www.theverge.com >> h3
  await page.locator('text=The Vergehttps://www.theverge.comhttps://www.theverge.com >> h3').click();
  await expect(page).toHaveURL('https://www.theverge.com/');

  // Click img >> nth=0
  await page.locator('img').first().click();
  await expect(page).toHaveURL('https://www.theverge.com/2022/2/21/22944025/capcom-street-fighter-6-announced-capcom-fighting-collection');
});