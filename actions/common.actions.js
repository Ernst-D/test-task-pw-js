const PW = require("@playwright/test")
const MainPage = require("../pages/main.page")

module.exports = {
    /**
     * @param {MainPage} mainPage 
     */
    async loginAction(mainPage){
        await mainPage.signinBtn.click();
        await mainPage.page.fill('input[name="email"]', 'hkosotnvatcoetuzln@kvhrs.com');
        await mainPage.page.fill('input[name="passwd"]', 'password123');    
        await mainPage.page.click('button:has-text("Sign in")');
    },

    /**
     * @param {PW.Page} page 
     * @param {("ui" | "request")} ui_request 
     */
    async logoutAction(page, ui_request = "ui"){
        /**
         * The reason why I added testUrl to page object is that our actions
         * shouldn't know anything about context where they are executes
         */
        let testUrl = page.testUrl;
        
        let logoutUI = async () => {
            return await page.locator("[class='logout'] >> text=Sign out").click();
        }
        let logoutRequest = async () =>{
            await page.request.get(`${testUrl.href}?mylogout=`);
            /**
             * In case, if we want to do something extra :)
             */
            await page.evaluate((testUrl)=>{
                window.fetch(`${testUrl.href}?controller=identity`);
            }, testUrl);     

            return await page.request.get(`${testUrl.href}?controller=authentication&back=identity`).then(response=>{
                page.goto(response.url())
            });
        }

        ui_request == "ui" ? await logoutUI() : await logoutRequest();
    }
}