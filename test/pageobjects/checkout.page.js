const { $ } = require('@wdio/globals')
const Page = require('./page');


class CheckoutPage extends Page {

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputZIP () {
        return $('#postal-code');
    }

    get btnContinue () {
        return $('#continue');
    }


    open () {
        return super.open('');
    }
}

module.exports = new CheckoutPage();
