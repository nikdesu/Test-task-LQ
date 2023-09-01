const loginPage = require('../pageobjects/login.page')

describe('Login with invalid password', () => {
    it('should get error message', async () => {
        await loginPage.open()
        await loginPage.inputUsername.addValue('standard_user')
        await loginPage.inputPassword.addValue('secreT_sauce') 
        await loginPage.btnLogin.click()
        await expect(loginPage.errorMsg).toBeDisplayed()
    })
})