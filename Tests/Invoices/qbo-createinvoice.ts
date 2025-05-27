import { test, expect } from '@playwright/test';
import {InvoiceLocatorsQBO} from './qbo-invoice-locators.ts'

test.use({ storageState: 'auth/state.json' });

test('Create a product in QBO', async ({ page }) => {
const QBOProducts = new InvoiceLocatorsQBO(page);
    await QBOProducts.getStarted();
    await QBOProducts.gotoQBOInvoices();
    await QBOProducts.ClickNewInvoice();
    await QBOProducts.SelectCustomer('CJA Demo Account');
    await QBOProducts.InputCustomerEmail('muneeba@cloudjunction.cloud');
    await QBOProducts.InputBillingAddress('Quebec City, Canada');
    await QBOProducts.InputTerms('Net 30')
    await QBOProducts.InputDueDate('26/05/2029')
    await QBOProducts.InputInvoiceDate('26/05/2029')

    await QBOProducts.ClickAddLines();
    await QBOProducts.AddProductRow1();
    await QBOProducts.InputProductName('CJA Demo Product');
    await QBOProducts.InputProductDescription('Test Product Description');
    await QBOProducts.InputProductQuantity('5');
    await QBOProducts.InputProductRate('20');
    await QBOProducts.InputProductAmount('100');
    await QBOProducts.InputProductTax('QST + GST (14.975%)');
    await QBOProducts.InputProductClass('West');
    await QBOProducts.InputDiscount('5');
    await QBOProducts.ClickSaveButton();

});
