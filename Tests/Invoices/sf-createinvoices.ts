import { test, expect } from '@playwright/test';
import {InvoiceLocatorsSF} from './sf-invoice-locators.ts'

test('Create a product in SF', async ({ page }) => {
  const SFProducts = new InvoiceLocatorsSF(page);
    await SFProducts.getStarted();
    await SFProducts.AccountLookup('');
    await SFProducts.ContactsLookup(''); 
    await SFProducts.OpportunityLookup(''); 
    await SFProducts.FillStatus('','');
    await SFProducts.FillBilling_Account(''); 
    await SFProducts.FillInvoiceDate('');
    await SFProducts.FillDueDate('');
    await SFProducts.fillCurrency('','');
    await SFProducts.FillDescription('');
    await SFProducts.FillBilling_Contact_Email(''); 
    await SFProducts.FillOpportunity_Product('');
    await SFProducts.FillTaxes('');
    await SFProducts.FillQuantity(''); 
    await SFProducts.FillRate('');
    await SFProducts.ClickSave();
});