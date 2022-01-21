/**
 * Example of usage of Moon (https://aerokube.com/moon/latest/) with Playwright Library (https://playwright.dev/docs/library).
 * Run: node moon.spec.js
 */

// const { webkit } = require("playwright");

// (async () => {
//   const browser = await webkit.connect({ timeout: 0, wsEndpoint: 'ws://localhost:4444/playwright/webkit/playwright-1.17.2?headless=false' });
//   const page = await browser.newPage();
//   await page.goto('https://www.whatismybrowser.com/');
//   await page.screenshot({ path: `screenshot.png` });
//   await browser.close();
// })();

/**
 * Example of usage of Moon (https://aerokube.com/moon/latest/)  with Playwright Test (https://playwright.dev/docs/intro)
 * Run: npx playwright test moon.spec.js --project="chromium"
 * NOTE:
 *  1. If you run without --project flag - it will start 3 workers with webkit (See generated screenshots)
 *  2. If you try to run with any other value of --project flag - it still will use webkit as a browser
 */

const base = require('@playwright/test');

const test = base.test.extend({    
    extendedPage: async ({ playwright }, use) => {
        /**
         * @type {import("playwright")}
         */
        let pw = playwright;
        let b = await pw.webkit.connect({ 
            timeout: 0, 
            wsEndpoint: 'ws://localhost:4444/playwright/webkit/playwright-1.17.2?headless=false' 
        });
        let newPage = await b.newPage();
        await use(newPage);
}});

test("test suite", async ({ extendedPage  }) => {
    await extendedPage.goto('https://www.whatismybrowser.com/');
    await extendedPage.screenshot({ path: `browser-${Date.now()}.png` });
});