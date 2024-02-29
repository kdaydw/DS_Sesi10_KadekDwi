const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    //NOTE: Elements Collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#login-button');}
    errorLogin = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`);
    // get errorLoginWithoutCredential () { return $('//h3[text()="Epic sadface: Username is required"]');}

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout:2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async errorLoginMessage (dynamicMessage) {
        await expect(this.errorLogin(dynamicMessage)).toBeDisplayed();
    }


    open () {
        return super.open('/'); //NOTE: Will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
