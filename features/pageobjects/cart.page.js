const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class CartPage extends Page {

    async productName() {
        return await $('.inventory_item_name').getText();
    }

    async validateCartPage() {
        await expect(browser).toHaveUrlContaining('/cart.html')
    }

    async validateExistProduct(productName){
      const product = await this.productName();
      await expect(product).toBe(productName);
    }

    open () {
        return super.open('/cart.html');
    }
}

module.exports = new CartPage();