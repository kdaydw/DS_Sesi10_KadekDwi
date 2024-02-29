const { Given, When, Then } = require('@wdio/cucumber-framework');


const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

//BDD Login
Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When('I am login with {string} credential', async (username) => {
    await LoginPage.login(username)
});

Then(/^I should see home page$/, async () => {
    await HomePage.validdateHomePage()
});

Then(/^I should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.errorLoginMessage(dynamicMessage)
});


//BDD Add Products To Cart
Given('I am logged in with {string}', async (username) => {
    await LoginPage.open()
    await LoginPage.login(username)
    await HomePage.validdateHomePage()
});

// When('I add {string} to the cart and I click icon cart', async (product) => {
//     // const btnAddToCartElement = await $('#add-to-cart-sauce-labs-backpack') (APA PERLU AYU BUAT ADDPRODUCT.PAGE.JS?????)
//     // await btnAddToCartElement.click()
// });

// Then(/^I should see product on the cart page$/, async () => {
    
// });






