import { expect, type Locator, type Page } from '@playwright/test';

export class InvoiceLocatorsSF {
    readonly page: Page;
    readonly Accounts:Locator;
    readonly Contacts:Locator;
    readonly Status: Locator;
    readonly BillingAccount: Locator;
    readonly Invoice_Date: Locator;
    readonly Due_Date: Locator;
    readonly Currency: Locator;
    readonly Description: Locator;
    readonly Billing_Contact_Email: Locator;
    readonly Opportunity: Locator;
    readonly Save: Locator;
    readonly Opportunity_Product: Locator;
    readonly Taxes:Locator;
    readonly Quantity: Locator;
    readonly Rate: Locator;


    constructor(page: Page) {
        this.page = page;
        this.Accounts =page.locator('input[placeholder="Search Accounts..."]');
        this.Contacts= page.locator('input[placeholder="Search Contacts..."]');
        this.Status=page.locator('button[aria-label="Status"]');
        this.BillingAccount=page.locator('input[name="Billing_Account__c"]');
        this.Invoice_Date=page.locator('input[name="Invoice_Date__c"]');
        this.Due_Date=page.locator('input[name="Due_Date__c"]');
        this.Currency=page.locator('button[aria-label="Currency"]');
        this.Description=page.locator('textarea[name="description"]');
        this.Billing_Contact_Email= page.locator('input[name="Billing_Contact_Email__c"]');
        this.Opportunity = page.locator('input[placeholder="Search Opportunities..."]');
        this.Save =  page.getByRole('button', { name: 'Save' }).nth(1);

        //Invoicelines
        this.Opportunity_Product =page.locator('input[placeholder="Search Opportunity Product..."]');
        this.Taxes= page.locator('input[placeholder="Search Invoice Taxes..."]');
        this.Quantity=page.locator('input[name="Quantity__c"]');
        this.Rate=page.locator('input[name="Rate__c"]');
    }
    
    async getStarted() {
        await this.page.goto('https://sandbox.qbo.intuit.com/app/invoices');
    }

    async AccountLookup(text: string) {
        await this.Accounts.fill(text);
    }

    async ContactsLookup(text: string) {
        await this.Contacts.fill(text);
    }

    async OpportunityLookup(text: string) {
        await this.Opportunity.fill(text);
    }

    async FillStatus(text: string, value: string) {
        await this.Status.click();
        await this.page.getByRole('option', { name: value }).click();
    }

    async FillBilling_Account(text: string) {
        await this.BillingAccount.fill(text);
    }

    async FillInvoiceDate(text: string) {
        await this.Invoice_Date.fill(text);
    }
        
    async FillDueDate(text: string) {
        await this.Due_Date.fill(text);
    }

    async fillCurrency(text: string,value: string){
        await this.Currency.click();
        await this.page.locator('span.slds-truncate', { hasText: value }).click();
    }

    async FillDescription(text: string) {
        await this.Description.fill(text);
    }

    async FillBilling_Contact_Email(text: string) {
        await this.Billing_Contact_Email.fill(text);
    }

    //Invoicelines
    async FillOpportunity_Product(text: string) {
        await this.Opportunity_Product.fill(text);
    }

    async FillTaxes(text: string) {
        await this.Taxes.fill(text);
    }

    async FillQuantity(text: string) {
        await this.Quantity.fill(text);
    }

    async FillRate(text: string) {
        await this.Rate.fill(text);
    }

    async ClickSave(){
            await this.Save.click();

    }
}