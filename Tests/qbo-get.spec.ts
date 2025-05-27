import { test, expect } from '@playwright/test';
import { Accounts } from './testdata.ts';
test.use({ storageState: 'auth/state.json' });
/*const Accounts = [
  { Salutation: 'Mr.', FirstName: 'Michael', LastName: 'M. Kelly', Title: 'Operation Manager', SIN: '684 872 757', DOB: 'February 25, 1979', Phone: '250-497-5116', Email: 'MichaelMKelly@teleworm.us', Street: '1004 Haaglund Rd', PostalCode: 'V0H 1R0', City:'Okanagan Falls',Province:'BC', Country:'CA' },
 // { Salutation: 'Mr.', FirstName: 'Alexander', LastName: 'M. Lee', Title: 'Powerhouse electrician', SIN: '684 872 757', DOB: 'April 5, 1980', Phone: '514-779-6482', Email: 'AlexanderMLee@dayrep.com', Street: '4777 rue Levy', PostalCode: 'H3C 5K4', City:'Montreal',Province:'BC', Country:'CA' },

];*/
const Contacts = [

];

Accounts.forEach(({ FirstName, LastName, Title, SIN, DOB, Phone, Email, Street, PostalCode, City,Province, Country }) => {
    test(`${FirstName}: ${LastName}: ${Title}: ${SIN}: ${DOB}: ${Phone}: ${Email}: ${Street}:${PostalCode}: ${City}: ${Province}: ${Country}`, async ({ page }) => {
    
    let Name: string= FirstName + LastName;
    test.setTimeout(50000);
    await page.goto('https://sandbox.qbo.intuit.com/app/customers');

    await page.getByLabel('New customer').first().click();
    //await page.getByLabel('First name').fill(FirstName);
    await page.locator('[data-cy="contact-drawer-first-name"]').fill(FirstName);
    await page.locator('[data-cy="contact-drawer-last-name"]').fill(LastName);
  await page.getByLabel('Customer display name').click();
  await page.getByLabel('Customer display name').fill(Name);
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(Email);
  await page.getByLabel('Phone number').click();
  await page.getByLabel('Phone number').fill(Phone);
  await page.getByLabel('Street address 1').click();
  await page.getByLabel('Street address 1').fill(Street);
  await page.getByLabel('Street address 2').click();
  await page.getByLabel('Street address 2').fill("Street2");
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill(City);
  await page.getByLabel('State').click();
  await page.getByLabel('State').fill(Province);
  await page.getByLabel('Zip Code').click();
  await page.getByLabel('Zip Code').fill(PostalCode);
  await page.getByLabel('Country').click();
  await page.getByLabel('Country').fill(Country);
  
  await page.getByRole('button', { name: 'Save' }).click();
    
  });
  });