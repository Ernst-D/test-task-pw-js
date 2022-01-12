// @ts-check
const { test, expect} = require('@playwright/test');
const { loginAction } = require('../actions/common.actions');
const MainPage = require('../pages/main.page');

test('Logout UI', async ({ page }) => {
    // TODO: move this to the fixture, tests should conatin only logic
    // not the technical implementation
    let mainPage = new MainPage(page);

    await test.step("Navigate to the main page",async()=>{
        await page.goto('http://automationpractice.com/index.php');
    });
    await test.step("Login action",async()=>{
        await loginAction(mainPage);
    });
    await test.step("Assert personal info", async()=>{
        // Click text=My personal information
        await page.click('text=My personal information');
        expect(page.url()).toBe('http://automationpractice.com/index.php?controller=identity');
    })
});