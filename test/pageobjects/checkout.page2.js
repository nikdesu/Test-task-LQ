const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutPage2 extends Page {

    get btnFinish () {
        return $('#finish')
    }
    



    open () {
        return super.open('');
    }
}

module.exports = new CheckoutPage2();