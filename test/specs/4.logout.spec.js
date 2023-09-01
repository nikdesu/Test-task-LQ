const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('Logout', () => {
    it('Should logout', async () => {
        await loginPage.open()
        await loginPage.inputUsername.addValue('standard_user')
        await loginPage.inputPassword.addValue('secret_sauce')
        await loginPage.btnLogin.click()
        await inventoryPage.btnMenu.click()
        await expect(inventoryPage.btnLogout).toBeDisplayed()
        await inventoryPage.btnLogout.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(loginPage.inputUsername).toHaveText('')
        await expect(loginPage.inputPassword).toHaveText('')
    })
})