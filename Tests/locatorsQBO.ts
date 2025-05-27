import { expect, type Locator, type Page } from '@playwright/test';

export class ConnectJunctionQBO {
    readonly page: Page;
    readonly first_name: Locator;
    readonly New_Customer: Locator;
    readonly Lastname: Locator;
    readonly Title: Locator;
    readonly CustomerDisplayName: Locator;
    readonly Email: Locator;
    readonly Phone: Locator;
    readonly Street_address_1: Locator;
    readonly Street_address_2: Locator;
    readonly City: Locator;
    readonly State: Locator;
    readonly Zip: Locator;
    readonly Country: Locator;
    readonly Search: Locator;
readonly Save: Locator;


    constructor(page: Page) {
        this.page = page;
        this.first_name = this.page.locator('[data-cy="contact-drawer-first-name"]');
        this.New_Customer= this.page.getByLabel('New customer').first();
        this.Lastname= page.locator('[data-cy="contact-drawer-last-name"]');
        this.Title = page.getByLabel('Title');
        this.CustomerDisplayName = page.getByLabel('Customer display name');
        this.Email = page.getByLabel('Email');
        this.Phone = page.getByLabel('Phone number');
        this.Street_address_1 = page.getByLabel('Street address 1');
        this.Street_address_2 = page.getByLabel('Street address 2');
        this.City = page.getByLabel('Country');
        this.State = page.getByLabel('State');
        this.Zip = page.getByLabel('Zip Code');
        this.Country = page.getByLabel('Country');
        this.Search = page.locator('input[placeholder="Search"]');
        this.Save =  page.getByRole('button', { name: 'Save' })
    }
    
    async getStarted() {
    await this.page.goto('https://sandbox.qbo.intuit.com/app/customers');
    }

    async ClickNewCustomer() {
        await this.New_Customer.click();
    }
    
    async FillfirstName(FirstName: string) {
        await this.first_name.fill(FirstName);
    }
    async InputSearch(text: string) {
        await this.Search.fill(text);
        await this.page.keyboard.press('Enter');
        await this.page.getByRole('button', { name:  }).click();
        await expect(this.page.getByText(text).first()).toBeVisible();
        //await this.page.getByRole('tab', { name: 'Customer Details' }).click();
    }
    async FillLasttName(text: string) {
        await this.Lastname.fill(text);
    }
        
    async FillTitle(text: string){
        await this.Title.click();
        await this.Title.fill(text);
        }
async FillCustomerName(text: string){
        await this.CustomerDisplayName.click();
        await this.CustomerDisplayName.fill(text);
        }

        async FillEmail(text: string){
        await this.Email.click();
        await this.Email.fill(text);
        }

        async FillPhone(text: string){
        await this.Phone.click();
        await this.Phone.fill(text);
        }

        async FillStreet1(text: string){
        await this.Street_address_1.click();
        await this.Street_address_1.fill(text);
        }

        async FillStreet2(text: string){
        await this.Street_address_2.click();
        await this.Street_address_2.fill(text);
        }

        async FillCity(text: string){
        await this.City.click();
        await this.City.fill(text);
        }

        async FillState(text: string){
        await this.State.click();
        await this.State.fill(text);
        }

        async FillZip(text: string){
        await this.Zip.click();
        await this.Zip.fill(text);
        }

        async FillCountry(text: string){
        await this.Country.click();
        await this.Country.fill(text);
        }
        async ClickSave(){
            await this.Save.click();

        }
}

