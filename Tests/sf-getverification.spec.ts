import { test, expect } from '@playwright/test';


const Accounts = [
  { Salutation: 'Mr.', FirstName: 'Michael', LastName: 'M. Kelly', Title: 'Operation Manager', SIN: '684 872 757', DOB: 'February 25, 1979', Phone: '250-497-5116', Email: 'MichaelMKelly@teleworm.us', Street: '1004 Haaglund Rd', PostalCode: 'V0H 1R0', City:'Okanagan Falls',Province:'BC', Country:'CA' },
  { Salutation: 'Mr.', FirstName: 'Alexander', LastName: 'M. Lee', Title: 'Powerhouse electrician', SIN: '684 872 757', DOB: 'April 5, 1980', Phone: '514-779-6482', Email: 'AlexanderMLee@dayrep.com', Street: '4777 rue Levy', PostalCode: 'H3C 5K4', City:'Montreal',Province:'BC', Country:'CA' },

];

const Contacts = [

];
Accounts.forEach(({Salutation, FirstName, LastName, Title, SIN, DOB, Phone, Email, Street, PostalCode, City,Province, Country }) => {
  test(`${FirstName}: ${LastName}: ${Title}: ${SIN}: ${DOB}: ${Phone}: ${Email}: ${Street}:${PostalCode}: ${City}: ${Province}: ${Country}`, async ({ page }) => {
  await page.goto('https://test.salesforce.com');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('cvca@cloudjunction.cloud.qboqa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(' Salesforce2019@');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto("https://cvca--qboqa.sandbox.lightning.force.com/lightning/o/Account/list?filterName=AllAccounts");
  await page.getByRole('button', { name: 'Sync To Quickbooks (All)' }).click();
  await page.waitForTimeout(20000); // wait for 20 seconds (20000 ms)
  await page.reload();  
  let Name:string = FirstName + LastName;
  await page.getByPlaceholder('Search this list..."').fill(Name);
  await expect(page.getByText(Name).first()).toBeVisible();
  await page.getByTitle(Name).click();

  let Address: string=Street + City +Province +PostalCode + Country;
  
  await expect(page.getByText(Address).first()).toBeVisible();

});

});