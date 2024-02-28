const { Given, When, Then } = require('@wdio/cucumber-framework');


const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');


Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I am login with "(.*)" credentianl$/, async (username) => {
    await LoginPage.login(username)
});

Then(/^I should see home page$/, async () => {
    await HomePage.validdateHomePage()
});

Then(/^I should see error "(.*)"$/, async (message) => {
    await LoginPage.userLockedOutErrorLogin(message)
});



