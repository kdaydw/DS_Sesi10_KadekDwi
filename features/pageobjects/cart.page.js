const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class CartPage extends Page {

    get listProducts () { return $('.cart_item');}

    async validateCartPage() {
        await expect(browser).toHaveUrlContaining('/cart.html')
    }

    async validateExistProduct(){
      await expect(this.listProducts).toBeDisplayed()
    }

    open () {
        return super.open('/cart.html');
    }
}

module.exports = new CartPage();