const base = require('@playwright/test');
const { expect } = require('@playwright/test');
const { loginAction, logoutAction } = require('../actions/common.actions');
const { predefinedUser, testUrl } = require("../fixtures/logout.fixture");
const MainPage = require('../pages/main.page');


/**
 * "context" and "page" fixtures are not supported in beforeAll,
 * so we extend test object with some predefined conditions
 */
const test = base.test.extend({    
    testUrl: ({},use) =>{
        use(testUrl);
    },
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);

        await test.step("Navigate to the main page",async()=>{
            await mainPage.page.goto(testUrl.href);
        });
        await test.step("Login action",async()=>{
            await loginAction(mainPage);
        });
        await test.step("Assert personal info", async()=>{   
            await page.click('text=My personal information');
            await expect(page.locator('#email')).toHaveValue(predefinedUser().email);
        });
        await use(mainPage);
}});

test('Logout UI with predefined user', async ({ mainPage }) => {
    let page = mainPage.page;
    await test.step("Logout action via UI", async ()=>{
       await logoutAction(page);
       await expect(page.locator("a >> text=Sign in")).toBeVisible();  
    })
});

test("Logout via API with predifined user", async ({mainPage, testUrl})=>{
    await test.step("Logout action via request", async ()=>{
        mainPage.page.testUrl = testUrl;
        await logoutAction(mainPage.page,"request");
        await expect(mainPage.page.locator("a >> text=Sign in")).toBeVisible();  
     })
})