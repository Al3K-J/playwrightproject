
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage'; 
import { ShopPage } from '../Pages/ShopPage';
import { MyAccountPage } from '../Pages/MyAccountPage';
import { loginData, registrationData } from '../TestData/RegistraionAndLogin';

test.beforeEach(async ({ page }) => {
  const home = new HomePage(page);
  await home.navigateToHomePage();
  await expect(page).toHaveTitle('WoodMart - WordPress WooCommerce Theme');
  await expect(page).toHaveURL('https://woodmart.xtemos.com/');
  await home.clickShopButton();
  await expect(page).toHaveURL('https://woodmart.xtemos.com/shop/');
  const shop = new ShopPage(page);
  await shop.clickLoginRegisterButton();
  
});


test('Create An Account on Woodmart', async ({ page }) => {
  const shop = new ShopPage(page);
  await shop.clickCreateAnAccountButton();
  const account = new MyAccountPage(page);
  await account.fillRegFrom(registrationData.username, registrationData.email, registrationData.password);
  await account.clickRegisterButton();
  await expect ('p[contains(text(),"Hello")]').toContain('Hello');
  
});

test('Login on Woodmart', async ({ page }) => {
const shop = new ShopPage(page);
await shop.fillLoginForm(loginData.username,loginData.password)
await shop.clickLoginButton();
 


})

 