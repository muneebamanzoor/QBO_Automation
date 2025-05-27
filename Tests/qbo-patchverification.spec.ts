import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth/state.json' });
const Accounts = [
  { Salutation: 'Mr.', FirstName: 'Michael', LastName: 'M. Kelly', Title: 'Operation Manager', SIN: '684 872 757', DOB: 'February 25, 1979', Phone: '250-497-5116', Email: 'MichaelMKelly@teleworm.us', Street: '1004 Haaglund Rd', PostalCode: 'V0H 1R0', City:'Okanagan Falls',Province:'BC', Country:'CA' },
  { Salutation: 'Mr.', FirstName: 'Alexander', LastName: 'M. Lee', Title: 'Powerhouse electrician', SIN: '684 872 757', DOB: 'April 5, 1980', Phone: '514-779-6482', Email: 'AlexanderMLee@dayrep.com', Street: '4777 rue Levy', PostalCode: 'H3C 5K4', City:'Montreal',Province:'BC', Country:'CA' },

];
const Contacts = [

];

Accounts.forEach(({Salutation, FirstName, LastName, Title, SIN, DOB, Phone, Email, Street, PostalCode, City,Province, Country }) => {
    test(`${FirstName}: ${LastName}: ${Title}: ${SIN}: ${DOB}: ${Phone}: ${Email}: ${Street}:${PostalCode}: ${City}: ${Province}: ${Country}`, async ({ page }) => {
    
    let Name: string= FirstName + LastName;
    await page.goto('https://sandbox.qbo.intuit.com/app/customers');
    await page.locator('input[placeholder="Search"]').fill('Amy\'s Bird Sanctuary');
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: 'Amy\'s Bird Sanctuary' }).click();
    //await page.getByRole('tab', { name: 'Customer Details' }).click();
    await expect(page.getByText('Amy\'s Bird Sanctuary').first()).toBeVisible();
    //let Address: string = Street + City +Province +PostalCode + Country;
    await expect(page.getByText('4581 Finch St., Bayshore, CA 94326').first()).toBeVisible();
    
  });
  });