import { expect, type Locator, type Page } from '@playwright/test';

export class ConnectJunctionSF {
    readonly page: Page;
    readonly name: Locator;
    readonly ButtonBack: Locator;
    readonly FullEntryTicket: Locator;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;
    readonly NewButton: Locator;
    readonly InputName: Locator;
    readonly InputPhone: Locator;
    readonly InputStreet: Locator;
    readonly InputPostalCode: Locator;
    readonly InputCity: Locator;
    readonly InputProvince: Locator;
    readonly InputCountry: Locator;
    readonly ClickSave: Locator;
    readonly syncToQuickbooks: Locator;
    readonly ClickNext: Locator;
    readonly EditButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.name = page.getByPlaceholder('Name');
        this.Username = page.getByLabel('Username');
        this.Password= page.getByLabel('Password');
        this.LoginButton = page.getByRole('button', { name: 'Log In' });
        this.NewButton =page.getByRole('button', { name: 'New' });
        this.EditButton =page.getByRole('button', { name: 'Edit' });
        this.InputName= page.locator('input[name="Name"]');
        this.InputPhone =  page.locator('input[name="Phone"]');
        this.InputStreet = page.locator('textarea[name="street"]');
        this.InputPostalCode = page.locator('input[name="postalCode"]');
        this.InputCity = page.locator('input[name="city"]');
        this.InputProvince =  page.locator('input[name="province"]');
        this.InputCountry =  page.locator('input[name="country"]');
        this.ClickSave =  page.getByRole('button', { name: 'Save' }).nth(1);
        this.syncToQuickbooks = page.getByRole('button', { name: 'Sync To Quickbooks' });
        this.ClickNext= page.getByRole('button', { name: 'Next' })
    }
    
    async getStarted() {
    await this.page.goto('https://www.google.com');
    }

    async fillUsername(User: string){
    await this.Username.click();
    await this.Username.fill(User);
  }
  async fillPassword(pw: string){
    await this.Password.click();
    await this.Password.fill(pw);
  }

  async ClickLogin(){
    await this.LoginButton.click();
  }
  async ClickNew(){
    await this.NewButton.click();
  }
  async Input_Name(firstname: string, lastname: string){
        await this.InputName.fill(firstname + ' ' + lastname);
  }
  async Input_Phone(Phone: string){
        await this.InputPhone.fill(Phone);
  }
    async Input_Street(Street: string){
        await this.InputStreet.fill(Street);
  }
  async Input_PostalCode(postalCode: string){
        await this.InputStreet.fill(postalCode);
  }
  async Input_City(City: string){
        await this.InputCity.fill(City);
  }
  async Input_Country(country: string){
        await this.InputCountry.fill(country);
  }
  async Input_Province(province: string){
        await this.InputProvince.fill(province);
  }
  async Click_Save(){
        await this.ClickSave.click();
  }
  async synctoQuickbooks() {
  await this.syncToQuickbooks.click();}
  async click_next(){
  await this.ClickNext.click();}
}

