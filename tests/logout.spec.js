// @ts-check
const { test, expect} = require('@playwright/test');
const { loginAction, logoutAction } = require('../actions/common.actions');
const MainPage = require('../pages/main.page');

const testUrl = new URL("http://automationpractice.com/index.php");

test('Logout UI with predefined user', async ({ page }) => {
    // TODO: move this to the fixture, tests should conatin only logic
    // not the technical implementation
    let mainPage = new MainPage(page);

    await test.step("Navigate to the main page",async()=>{
        await page.goto(testUrl.href);
    });
    await test.step("Login action",async()=>{
        await loginAction(mainPage);
    });
    await test.step("Assert personal info", async()=>{
        /**
         * TODO: add assert for user email, which will comes from User entity
         */        
        await page.click('text=My personal information');
        expect(page.url()).toBe(`${testUrl.href}?controller=identity`);

    })
    await test.step("Logout action via UI", async ()=>{
       await logoutAction(page);
       await expect(page.locator("a >> text=Sign in")).toBeVisible();  
    })
});

test("Logout via API with predifined user", async ({page})=>{
    let mainPage = new MainPage(page);

    await test.step("Navigate to the main page",async()=>{
        await page.goto(testUrl.href);
    });
    await test.step("Login action",async()=>{
        await loginAction(mainPage);
    });
    await test.step("Assert personal info", async()=>{
        /**
         * TODO: add assert for user email, which will comes from User entity
         */        
        await page.click('text=My personal information');
        expect(page.url()).toBe(`${testUrl.href}?controller=identity`);

    })
    await test.step("Logout action via API", async ()=>{
        // @ts-ignore
        page.testUrl = testUrl;
        await logoutAction(page,"request");
        await expect(page.locator("a >> text=Sign in")).toBeVisible();  
     })
})