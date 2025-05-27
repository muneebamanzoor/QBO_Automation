import { expect, type Locator, type Page } from '@playwright/test';

export class InvoiceLocatorsQBO
{
  readonly page: Page;

  readonly CreateInvoice: Locator;
  readonly SelectCustomerDropdown: Locator;
  readonly SelectCustomerOption: Locator;
  readonly CustomerEmail: Locator;
  readonly BillingAddress: Locator;
  readonly TermsDropdown: Locator;
  readonly TermsOption: Locator;
  readonly InvoiceDate: Locator;
  readonly DueDate: Locator;
  
  

  readonly AddLinesButton: Locator;
  readonly AddLinesRow1: Locator;
  readonly ProductNameDropdown: Locator;
  readonly ProductNameOption: Locator;
  readonly ProductDesc: Locator;
  readonly ProductQuantity : Locator;
  readonly ProductRate: Locator;
  readonly ProductAmount: Locator;
  readonly ProductTaxDropdown: Locator;
  readonly ProductTaxOption: Locator;
  readonly ProductClassDropdown: Locator;
  readonly ProductClassOption: Locator;
  readonly Discount: Locator;
  readonly SaveButton: Locator;
  readonly SaveandSendButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.CreateInvoice = page.getByRole('button', { name: 'Create invoice', exact: true });
    this.SelectCustomerDropdown = page.getByRole('textbox', { name: 'Select a customer' });
    this.SelectCustomerOption = page.getByRole('option', { name: 'CJA Demo Account - CAD' });
    this.CustomerEmail = page.getByRole('textbox', { name: 'Customer email' });
    this.BillingAddress = page.getByRole('textbox', { name: 'Billing address' });
    this.TermsDropdown = page.getByRole('textbox', { name: 'Terms' });
    this.TermsOption = page.getByRole('option', { name: 'Net 30' });
    this.InvoiceDate = page.locator('#uniqName_8_8');
    this.DueDate = page.locator('#uniqName_8_10');
    
    this.AddLinesButton = page.getByRole('button', { name: 'Add lines' });
    this.AddLinesRow1 = page.locator('.dgrid-row-table > tr > td:nth-child(3)').first();
    this.ProductNameDropdown = page.locator('[id="improved-inventory\\/js\\/extension-providers\\/ItemComboBox_0"]');
    this.ProductNameOption = page.getByLabel('improved-inventory/js/').getByText('CJA Demo Product');
    this.ProductDesc = page.getByRole('textbox', { name: 'DESCRIPTION' });
    this.ProductQuantity = page.getByRole('textbox', { name: 'Quantity' });
    this.ProductRate = page.getByRole('textbox', { name: 'rate' });
    this.ProductAmount = page.getByRole('textbox', { name: 'Amount' });
    this.ProductTaxDropdown = page.locator('#uniqName_18_2');
    this.ProductTaxOption = page.getByText('QST + GST (14.975%)');
    this.ProductClassDropdown = page.getByRole('textbox', { name: 'Class' });
    this.ProductClassOption =page.getByText('West');
    this.Discount = page.getByRole('textbox', { name: 'Discount' })
    this.SaveButton = page.getByRole('button', { name: 'Save' })
    this.SaveandSendButton = page.getByRole('button', { name: 'Save and send' })

  }


  async getStarted() {
    await this.page.goto('https://www.google.com')
  }

  async gotoQBOInvoices() {
      await this.page.goto('https://sandbox.qbo.intuit.com/app/invoices')
  }

  async ClickNewInvoice() {
      await this.CreateInvoice.click(); 
  }

  async SelectCustomer(cust: string) {
      await this.SelectCustomerDropdown.click();
      await this.SelectCustomerDropdown.fill(cust);
      await this.SelectCustomerOption.click();
  }

  async InputCustomerEmail(email: string) {
      await this.CustomerEmail.click();
      await this.CustomerEmail.fill(email);
  }

  async InputBillingAddress(billadd : string) {
      await this.BillingAddress.click();
      await this.BillingAddress.fill(billadd);
  }

  async InputTerms(termname: string) {
      await this.TermsDropdown.click();
      await this.TermsDropdown.fill(termname);
      await this.TermsOption.click();
  }

  async InputDueDate(duedate: string) {
      await this.DueDate.click();
      await this.DueDate.fill(duedate);
  }

  async InputInvoiceDate(invdate: string) {
      await this.InvoiceDate.click();
      await this.InvoiceDate.fill(invdate);
  }

  async ClickAddLines() {
      await this.AddLinesButton.click();
  }

  async AddProductRow1() {
      await this.AddLinesRow1.click();
  }

  async InputProductName(prodname: string) {
      await this.ProductNameDropdown.click();
      await this.ProductNameDropdown.fill(prodname);
  }
  
  async InputProductDescription(proddesc: string) {
      await this.ProductDesc.click();
      await this.ProductDesc.fill(proddesc);
  }

  async InputProductQuantity(prodqty: string) {
      await this.ProductQuantity.click();
      await this.ProductQuantity.fill(prodqty);
  }
 
 async InputProductRate(prodrate: string) {
      await this.ProductRate.click();
      await this.ProductRate.fill(prodrate);
  }

  async InputProductAmount(prodamount: string) {
      await this.ProductAmount.click();
      await this.ProductAmount.fill(prodamount);
  }

   async InputProductTax(prodtax: string) {
       await this.ProductTaxDropdown.click();
      await this.ProductTaxDropdown.fill(prodtax);
      await this.ProductTaxOption.click();
  }

   async InputProductClass(prodclass: string) {
       await this.ProductClassDropdown.click();
      await this.ProductClassDropdown.fill(prodclass);
      await this.ProductClassOption.click();
  }

    async InputDiscount(discount: string) {
      await this.Discount.click();
      await this.Discount.fill(discount);

  }

  async ClickSaveButton(){
    await this.SaveButton.click();
  }

   async ClickSaveandSendButton(){
    await this.SaveandSendButton.click();
  }


}