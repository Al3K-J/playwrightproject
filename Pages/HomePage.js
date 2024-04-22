exports.HomePage =
class HomePage{

constructor (page){
    this.page = page;
    this.Locators = {
        shopButton: 'a[href="https://woodmart.xtemos.com/shop/"] .nav-link-text'
    }
}

async navigateToHomePage(){
await this.page.goto('https://woodmart.xtemos.com/')



}
async clickShopButton(){
await this.page.click(this.Locators.shopButton)


}
    
}