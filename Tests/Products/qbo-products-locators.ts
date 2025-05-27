import { expect, type Locator, type Page } from '@playwright/test';

export class ProductLocatorsQBO {
  readonly page: Page;

  readonly newButton: Locator;
  readonly inventoryOption: Locator;
  readonly nameInput: Locator;
  readonly skuInput: Locator;
  readonly categoryDropdown: Locator;
  readonly categoryOption: Locator;
  readonly classDropdown: Locator;
  readonly classOption: Locator;
  readonly initialQtyInput: Locator;
  readonly asofDate: Locator;
  readonly reorderPointInput: Locator;
  readonly descriptionInput: Locator;
  readonly salesPriceInput: Locator;
  readonly salesTaxInclusiveCheckbox: Locator;

  readonly salesTaxDropdown: Locator;
  readonly salesTaxOption: Locator;
  readonly costInput: Locator;
  readonly purchasingInfoInput: Locator;
  readonly purchasetaxcheckbox : Locator;
  readonly purchaseTaxDropdown: Locator;
  readonly purchaseTaxOption: Locator;
  readonly preferredVendorDropdown: Locator;
  readonly preferredVendorOption: Locator;
  readonly saveAndCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newButton = page.getByRole('button', { name: 'New', exact: true });
    this.inventoryOption = page.getByRole('button', {name: 'Inventory Products you buy and/or sell and that you track quantities of.'
    });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.skuInput = page.getByRole('textbox', { name: 'SKU' });

    this.categoryDropdown = page.getByRole('textbox', { name: 'Category' }); 
    this.categoryOption = page.getByRole('option', { name: 'Employee events' });
    // await page.getByRole('textbox', { name: 'Category' }).click();
    // await page.getByRole('textbox', { name: 'Category' }).fill('Employee events');
    // await page.getByRole('option', { name: 'Employee events' }).click();

    this.classDropdown = page.getByRole('textbox', { name: 'Assign a class' });
    this.classOption = page.getByRole('option', { name: 'East' });
    //   await page.getByRole('textbox', { name: 'Assign a class' }).click();
    //   await page.getByRole('textbox', { name: 'Assign a class' }).fill('East');
    //   await page.getByRole('option', { name: 'East' }).click();

    this.initialQtyInput = page.getByRole('textbox', { name: 'Initial quantity on hand' });
    // await page.getByRole('textbox', { name: 'Initial quantity on hand' }).click(); 
    // await page.getByRole('textbox', { name: 'Initial quantity on hand' }).fill('23'); 

    this.asofDate = page.getByRole('textbox', { name: 'DD/MM/YYYY' });
    // await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
    // await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).fill('21/08/2025');
    // await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).press('Enter');

    this.reorderPointInput = page.getByRole('textbox', { name: 'Reorder point' });
    // await page.getByRole('textbox', { name: 'Reorder point' }).click();
    // await page.getByRole('textbox', { name: 'Reorder point' }).fill('65');

    this.descriptionInput = page.getByRole('textbox', { name: 'Description' });
    // await page.getByRole('textbox', { name: 'Description' }).click();
    // await page.getByRole('textbox', { name: 'Description' }).fill('test desc');

    this.salesPriceInput = page.getByRole('textbox', { name: 'Sales price/rate' });
    // await page.getByRole('textbox', { name: 'Sales price/rate' }).click();
    // await page.getByRole('textbox', { name: 'Sales price/rate' }).fill('500');

    this.salesTaxInclusiveCheckbox = page.locator('input[name="salesTaxInclusive"]')
    // await page.locator('input[name="salesTaxInclusive"]').check();

    this.salesTaxDropdown = page.getByRole('textbox', { name: 'Sales tax' });
    this.salesTaxOption = page.getByRole('option', { name: 'CJA Test Tax (9%)' });
    // await page.getByRole('textbox', { name: 'Sales tax' }).click();
    // await page.getByRole('textbox', { name: 'Sales tax' }).fill('CJA Test Tax');
    // await page.getByRole('option', { name: 'CJA Test Tax (9%)' }).click();

    this.purchasingInfoInput = page.getByRole('textbox', { name: 'Purchasing information' });
    // await page.getByRole('textbox', { name: 'Purchasing information' }).click();
    // await page.getByRole('textbox', { name: 'Purchasing information' }).fill('test prucha info');

    this.costInput = page.getByRole('textbox', { name: 'Cost (CAD)' })
    // await page.getByRole('textbox', { name: 'Cost (CAD)' }).click();
    // await page.getByRole('textbox', { name: 'Cost (CAD)' }).fill('300');

    this.purchasetaxcheckbox = page.getByRole('checkbox', { name: 'Inclusive of purchase tax' });
    // await page.getByRole('checkbox', { name: 'Inclusive of purchase tax' }).check();

    this.purchaseTaxDropdown = page.getByRole('textbox', { name: 'Purchase tax' });
    this.purchaseTaxOption = page.getByRole('option', { name: 'CJA Test Group Rate (9.975%)' });
    // await page.getByRole('textbox', { name: 'Purchase tax' }).click();
    // await page.getByRole('textbox', { name: 'Purchase tax' }).fill('Cja');
    // await page.getByRole('option', { name: 'CJA Test Group Rate (9.975%)' }).click();

  this.preferredVendorDropdown = page.getByTestId('__textField');
  this.preferredVendorOption = page.getByRole('option', { name: 'Cass Hayden' });
    // await page.getByTestId('__textField').click();
    // await page.getByTestId('__textField').fill('cass');
    // await page.getByRole('option', { name: 'Cass Hayden' }).click();

  }


  async getstarted() {
    await this.page.goto('https://www.google.com')
  }

  async gotoQBOItems() {
      await this.page.goto('https://sandbox.qbo.intuit.com/app/items')
  }

  async ClickNew() {
      await this.newButton.click(); 
  }

  async ClickInventory() {
      await this.inventoryOption.click();
  }

  async InputProductName(prodname: string) {
      await this.nameInput.click();
      await this.nameInput.fill(prodname);
  }
  async InputSKU(SKU : string) {
      await this.skuInput.click();
      await this.skuInput.fill(SKU);
  }

  async InputCategory(catname: string) {
      await this.categoryDropdown.click();
      await this.categoryDropdown.fill(catname);
      await this.categoryOption.click();
  }

  async InputClass(classname: string) {
      await this.classDropdown.click();
      await this.classDropdown.fill(classname);
      await this.classOption.click();
  }

  async InputQunatity(quanity: string) {
      await this.initialQtyInput.click();
      await this.initialQtyInput.fill(quanity);
  }

  async InputAsOfDate(date: string) {
      await this.asofDate.click();
      await this.asofDate.fill(date);
      await this.asofDate.press('Enter')
  }
  async InputReorderPoint(reorder: string) {
      await this.reorderPointInput.click();
      await this.reorderPointInput.fill(reorder);
  }
  async InputDescription(desc: string) {
      await this.descriptionInput.click();
      await this.descriptionInput.fill(desc);
  }
  async InputSalesPrice(slsprc: string) {
      await this.salesPriceInput.click();
      await this.salesPriceInput.fill(slsprc);
  }
  async InputSalesTaxInclusiveChk() {
      await this.salesPriceInput.check();
  }

 async InputSalesTax(slstax: string) {
      await this.salesTaxDropdown.click();
      await this.salesTaxDropdown.fill(slstax);
      await this.salesTaxOption.click();
  }
 async InputPurchaseInfo(prchseinfo: string) {
      await this.purchasingInfoInput.click();
      await this.purchasingInfoInput.fill('Test information');
  }

   async InputCost(cost: string) {
      await this.costInput.click();
      await this.costInput.fill(cost);
  }

   async InputPurchaseTaxChk() {
      await this.purchasetaxcheckbox.check();
  }

    async InputPurchaseTax(taxtype: string) {
      await this.purchaseTaxDropdown.click();
      await this.purchaseTaxDropdown.fill(taxtype);
      await this.purchaseTaxOption.click();
  }

  async InputPreferredVendor(vendor: string) {
      await this.preferredVendorDropdown.click();
      await this.preferredVendorDropdown.fill(vendor);
      await this.preferredVendorOption.click();
  }

  async ClickSaveButton(){
    await this.saveAndCloseButton.click();
  }



  async createInventoryItem() {
    await this.getstarted();
    await this.gotoQBOItems();
    await this.ClickNew();
    await this.ClickInventory();
    await this.InputProductName('ABC Product');
    await this.InputSKU('23');
    await this.InputCategory('Employee Events');
    await this.InputClass('East');
    await this.InputQunatity('5');
    await this.InputAsOfDate('18/05/2025');
    await this.InputReorderPoint('4');
    await this.InputDescription('Test Description');
    await this.InputSalesPrice('500');
    await this.InputSalesTaxInclusiveChk();
    await this.InputSalesTax('CJA Test Tax');
    await this.InputCost('cost');
    await this.InputPurchaseInfo('Test Purchase Info');
    await this.InputPurchaseTaxChk();
    await this.InputPurchaseTax('Cja');
    await this.InputPreferredVendor('Cass');
    await this.ClickSaveButton();

  }
}
