const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page')
const cartPage = require('../pageobjects/cart.page')

describe('Saving the cart after logout', () => {
    it('Should save the cart insides after logout', async () => {
        await loginPage.open()
        await loginPage.inputUsername.addValue('standard_user')
        await loginPage.inputPassword.addValue('secret_sauce')
        await loginPage.btnLogin.click()
        await inventoryPage.btnAddToCartBackpack.click()
        await inventoryPage.btnMenu.click()
        await inventoryPage.btnLogout.click()
        await loginPage.inputUsername.addValue('standard_user')
        await loginPage.inputPassword.addValue('secret_sauce')
        await loginPage.btnLogin.click()
        await inventoryPage.btnCart.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(cartPage.textItemNameList[0]).toBeDisplayed()
        await expect(cartPage.textItemNameList[0]).toHaveText('Sauce Labs Backpack')
    })
})