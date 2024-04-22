exports.MyAccountPage =
class MyAccountPage {

constructor (page){
this.page = page;
this.Locators = {
userNameField : '#reg_username',
emailField : '#reg_email',
passwordField : '#reg_password',
registerButton : 'button[value="Register"]'
}
}
async fillRegFrom(username, email, password) {
    await this.page.fill(this.Locators.userNameField, username);
    await this.page.fill(this.Locators.emailField, email);
    await this.page.fill(this.Locators.passwordField, password);
}

async clickRegisterButton() {
    await this.page.click(this.Locators.registerButton);
    
}







}