import { test, expect } from '@playwright/test';
import {ProductLocatorsQBO} from './qbo-products-locators.ts'
import testData from './qbo-productsdata.json';


test.use({ storageState: 'auth/state.json' });

test.describe('QBO Product Creation Tests', () => {
  for (const data of testData) {
    test(`Create product: ${data.ProductName}`, async ({ page }) => {
      const QBOProducts = new ProductLocatorsQBO(page);

      await QBOProducts.getstarted();
      await QBOProducts.gotoQBOItems();
      await QBOProducts.ClickNew();
      await QBOProducts.ClickInventory();

      await QBOProducts.InputProductName(data.ProductName);
      await QBOProducts.InputSKU(data.SKU);
      await QBOProducts.InputCategory(data.Category);
      await QBOProducts.InputClass(data.Class);
      await QBOProducts.InputQunatity(data.Quantity);
      await QBOProducts.InputAsOfDate(data.AsOfDate);
      await QBOProducts.InputReorderPoint(data.ReorderPoint);
      await QBOProducts.InputDescription(data.Description);
      await QBOProducts.InputSalesPrice(data.SalesPrice);
      await QBOProducts.InputSalesTaxInclusiveChk();
      await QBOProducts.InputSalesTax(data.SalesTax);
      await QBOProducts.InputCost(data.Cost);
      await QBOProducts.InputPurchaseInfo(data.PurchaseInfo);
      await QBOProducts.InputPurchaseTaxChk();
      await QBOProducts.InputPurchaseTax(data.PurchaseTax);
      await QBOProducts.InputPreferredVendor(data.PreferredVendor);

      await QBOProducts.ClickSaveButton();
    });
  }
});



// test.use({ storageState: 'auth/state.json' });
// test('Create a product in QBO', async ({ page }) => {
// const QBOProducts = new ProductLocatorsQBO(page);
//     await QBOProducts.getstarted();
//     await QBOProducts.gotoQBOItems();
//     await QBOProducts.ClickNew();
//     await QBOProducts.ClickInventory();
//     await QBOProducts.InputProductName(testData.ProductName);
//     await QBOProducts.InputSKU(testData.SKU);
//     await QBOProducts.InputCategory(testData.Category);
//     await QBOProducts.InputClass(testData.Class);
//     await QBOProducts.InputQunatity(testData.Quantity);
//     await QBOProducts.InputAsOfDate(testData.AsOfDate);
//     await QBOProducts.InputReorderPoint(testData.ReorderPoint);
//     await QBOProducts.InputDescription(testData.Description);
//     await QBOProducts.InputSalesPrice(testData.SalesPrice);
//     await QBOProducts.InputSalesTaxInclusiveChk();
//     await QBOProducts.InputSalesTax(testData.SalesTax);
//     await QBOProducts.InputCost(testData.Cost);
//     await QBOProducts.InputPurchaseInfo(testData.PurchaseInfo);
//     await QBOProducts.InputPurchaseTaxChk();
//     await QBOProducts.InputPurchaseTax(testData.PurchaseTax);
//     await QBOProducts.InputPreferredVendor(testData.PreferredVendor);
//     await QBOProducts.ClickSaveButton();
// });