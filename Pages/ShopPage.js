exports.ShopPage = class ShopPage{

    constructor(page){
    this.page = page;
    this.Locators = {
    loginRegisterButton : 'a[title="My account"] .wd-tools-text',
    userNameEmailField : '#username',
    passwordField : '#password',
    rememberMeCheckBox : 'input[title=Remember me]',
    loginButton : 'button[name="login"][value="Log in"]',
    createAnAccountButton : '.btn.btn-style-link.btn-color-primary.create-account-button'
    }
    }

    async clickCreateAnAccountButton(){
    await this.page.click(this.Locators.createAnAccountButton)

    }

    async clickLoginRegisterButton(){
        await this.page.click(this.Locators.loginRegisterButton)


    }
    async fillLoginForm(username,password){
        await this.page.fill(this.Locators.userNameEmailField,username)
        await this.page.fill(this.Locators.passwordField,password)



    }
    async clickLoginButton(){
        await this.page.click(this.Locators.loginButton)
    }

}