const MainPage = require("../pages/main.page")

module.exports = {
    /**
     * 
     * @param {MainPage} mainPage 
     */
    async loginAction(mainPage){
        await mainPage.signinBtn.click();
        await mainPage.page.fill('input[name="email"]', 'hkosotnvatcoetuzln@kvhrs.com');
        await mainPage.page.fill('input[name="passwd"]', 'password123');    
        await mainPage.page.click('button:has-text("Sign in")');
    }
}