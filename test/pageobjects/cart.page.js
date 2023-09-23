const { $ } = require('@wdio/globals')
const Page = require('./page');


class CartPage extends Page {

    get textItemNameList () {
        return $$('[class="inventory_item_name"]');
    }

    get btnCOUT () {
        return $('#checkout');
    }

    get errorMessage () {
        return $('#error-checkout');
    }





    open () {
        return super.open('');
    }
}

module.exports = new CartPage();
