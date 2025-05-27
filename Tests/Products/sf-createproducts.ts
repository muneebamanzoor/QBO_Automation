import { test, expect } from '@playwright/test';
import {ProductLocatorsSF} from './sf-products-locators.ts'
import testData from './sf-productsdata.json'


test.describe('SF Product Creation Tests', () => {
  for (const data of testData) {
    test(`Create product: ${data.ProductName}`, async ({ page }) => {
      const SFProducts = new ProductLocatorsSF(page);
    await SFProducts.getStarted();
    await SFProducts.gotoSFlogin();
    
    await SFProducts.fillUsername('cvca@cloudjunction.cloud.qboqa');
    await SFProducts.fillPassword('Salesforce2019@');
    await SFProducts.ClickLogin();
    
    await SFProducts.page.goto('https://cvca--qboqa.sandbox.lightning.force.com/lightning/o/Product2/list?filterName=AllProducts');
    await SFProducts.ClickNew();
    await SFProducts.Input_ProductName(data.ProductName);
    await SFProducts.Input_ProductCode(data.SFProductCode);
    await SFProducts.Input_ProductDesc(data.Description);
    await SFProducts.Input_ActiveInactive();
    await SFProducts.Select_ProdFamily(data.SFProductFamily)
    await SFProducts.Click_Save();
    });
  }
});




// test('Create a product in SF', async ({ page }) => {
//   const SFProducts = new ProductLocatorsSF(page);
//     await SFProducts.getStarted();
//     await SFProducts.gotoSFlogin();
    
//     await SFProducts.fillUsername('cvca@cloudjunction.cloud.qboqa');
//     await SFProducts.fillPassword('Salesforce2019@');
//     await SFProducts.ClickLogin();
    
//     await SFProducts.page.goto('https://cvca--qboqa.sandbox.lightning.force.com/lightning/o/Product2/list?filterName=AllProducts');
//     await SFProducts.ClickNew();
//     await SFProducts.Input_ProductName('Test Product');
//     await SFProducts.Input_ProductCode('382');
//     await SFProducts.Input_ProductDesc('Test Description');
//     await SFProducts.Input_ActiveInactive();
//     await SFProducts.Select_ProdFamily('General Partner Membership')
//     await SFProducts.Click_Save();
//   });