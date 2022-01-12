const Playwright = require("@playwright/test")

class MainPage {
    /**
     * 
     * @param {Playwright.Page} page 
     */
    constructor(page){
        this.page = page;
    }

    get signinBtn(){
        return this.page.locator('[class="login"]');
    }

}
module.exports = MainPage;