const loginPage = require('../pageobjects/login.page')

describe('Login with invalid login', () => {
    it('should get error message', async () => {
        await loginPage.open()
        await loginPage.inputUsername.addValue('standarD_user')
        await loginPage.inputPassword.addValue('secret_sauce') 
        await loginPage.btnLogin.click()
        await expect(loginPage.errorMsg).toBeDisplayed()
    })
})