const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnMenu () {
        return $('#react-burger-menu-btn');
    }

    get btnLogout () {
        return $('#logout_sidebar_link');
    }

    get btnCart () {
        return $('[class="shopping_cart_link"]');
    }

    get btnAddToCartBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    
    get btnTwitter () {
        return $('[class="social_twitter"]')
    }

    get btnFB () {
        return $('[class="social_facebook"]')
    }

    get btnLI () {
        return $('[class="social_linkedin"]')
    }

    get items () {
        return $$('[class="inventory_item_name"]')
    }

    get sortMenu () {
        return $('[class="product_sort_container"]')
    }

    get sortA_Z () {
        return $('[value="az"]')
    }

    get sortZ_A () {
        return $('[value="za"]')
    }

    get sortLO_HI () {
        return $('[value="lohi"]')
    }

    get sortHI_LO () {
        return $('[value="hilo"]')
    }

    get sauceBP () {
        return $('#item_4_title_link')
    }

    get sauceBL () {
        return $('#item_0_title_link')
    }

    get sauceBT () {
        return $('#')
    }

    get sauceFJ () {
        return $('#')
    }

    get sauceLO () {
        return $('#')
    }

    get test_AllTheTings () {
        return $('#')
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new InventoryPage();
