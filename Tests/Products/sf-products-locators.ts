import { expect, type Locator, type Page } from '@playwright/test';

export class ProductLocatorsSF {
    readonly page: Page;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;
    
    readonly NewButton: Locator;
    readonly ProductName: Locator;
    readonly ProductCode: Locator;
    readonly ProductDescription: Locator;
    readonly ActiveInactive: Locator;
    readonly ProductFamily: Locator;
    readonly ProductFamilyOption: Locator;

    readonly ClickSave: Locator;
    // readonly syncToQuickbooks: Locator;
    // readonly ClickNext: Locator;
    
    
    constructor(page: Page) {
        this.page = page;
        this.Username = page.getByRole('textbox', { name: 'Username' });
        this.Password= page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Log In' });

        this.NewButton =page.getByRole('button', { name: 'New' });
        this.ProductName =page.getByRole('textbox', { name: '*Product Name' });
        this.ProductCode= page.getByRole('textbox', { name: 'Product Code' });
        this.ProductDescription =  page.getByRole('textbox', { name: 'Product Description' });
        this.ActiveInactive = page.getByRole('checkbox', { name: 'Active' });
        this.ProductFamily = page.getByRole('combobox', { name: 'Product Family' });
        this.ProductFamilyOption = page.getByText('General Partner Membership');

        this.ClickSave =  page.getByRole('button', { name: 'Save' }).nth(1);
      //   this.syncToQuickbooks = page.getByRole('button', { name: 'Sync To Quickbooks' });
      //   this.ClickNext= page.getByRole('button', { name: 'Next' })
    }
    
    async getStarted() {
    await this.page.goto('https://www.google.com');
    }

    async gotoSFlogin() {
    await this.page.goto('https://test.salesforce.com');
    }

    async fillUsername(User: string){
    await this.Username.click();
    await this.Username.fill(User);
  }
  async fillPassword(pwd: string){
    await this.Password.click();
    await this.Password.fill(pwd);
  }

  async ClickLogin(){
    await this.LoginButton.click();
  }
  async ClickNew(){
    await this.NewButton.click();
  }
  async Input_ProductName(prodname: string){
        await this.ProductName.fill(prodname);
  }
  async Input_ProductCode(prodcode: string){
        await this.ProductCode.fill(prodcode);
  }
    async Input_ProductDesc(proddesc: string){
        await this.ProductDescription.fill(proddesc);
  }
  async Input_ActiveInactive(){
        await this.ActiveInactive.check();
  }
  async Select_ProdFamily(prodfam: string){
        await this.ProductFamily.fill(prodfam);
        await this.ProductFamilyOption.click();
  }
  
  async Click_Save(){
        await this.ClickSave.click();
  }
//   async synctoQuickbooks() {
//   await this.syncToQuickbooks.click();}
//   async click_next(){
//   await this.ClickNext.click();}


  async CreateProduct(){
    await this.getStarted();
    await this.gotoSFlogin();
    
    await this.fillUsername('cvca@cloudjunction.cloud.qboqa');
    await this.fillPassword('Salesforce2019@');
    await this.ClickLogin();
    
    await this.page.goto('https://cvca--qboqa.sandbox.lightning.force.com/lightning/o/Product2/list?filterName=AllProducts');
    await this.ClickNew();
    await this.Input_ProductName('Test product');
    await this.Input_ProductCode('382');
    await this.Input_ProductDesc('Test Description');
    await this.Input_ActiveInactive();
    await this.Select_ProdFamily('General Partner Membership')
    await this.Click_Save();

    
  }

}

