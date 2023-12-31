const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('Sorting', () => {
    it('Sorting should work properly', async () => {
        await loginPage.open()
        await loginPage.inputUsername.addValue('standard_user')
        await loginPage.inputPassword.addValue('secret_sauce')
        await loginPage.btnLogin.click()
        await inventoryPage.sortMenu.click()
        await inventoryPage.sortA_Z.click()
        await expect(inventoryPage.items[0]).toHaveText('Sauce Labs Backpack')
        await inventoryPage.sortZ_A.click()
        await expect(inventoryPage.items[0]).toHaveText('Test.allTheThings() T-Shirt (Red)')
        await inventoryPage.sortLO_HI.click()
        await expect(inventoryPage.items[0]).toHaveText('Sauce Labs Onesie')
        await inventoryPage.sortHI_LO.click()
        await expect(inventoryPage.items[0]).toHaveText('Sauce Labs Fleece Jacket')
    })
})