const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')

describe('Valid login', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open()
        await loginPage.inputUsername.addValue('standard_user')
        await loginPage.inputPassword.addValue('secret_sauce')
        await loginPage.btnLogin.click()
        await expect(browser).toHaveUrlContaining('inventory.html')
    })
})