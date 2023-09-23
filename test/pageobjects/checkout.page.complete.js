const { $ } = require('@wdio/globals')
const Page = require('./page');


class CheckoutPageComp extends Page {

    get btnHome () {
        return $('#back-to-products');
    }


    open () {
        return super.open('');
    }
}

module.exports = new CheckoutPageComp();