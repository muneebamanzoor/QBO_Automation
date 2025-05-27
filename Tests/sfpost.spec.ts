import { test, expect } from '@playwright/test';
import {ConnectJunctionSF} from './locatorsSF.ts'

const Accounts = [
  { Salutation: 'Mr.', FirstName: 'Michael', LastName: 'M. Kelly', Title: 'Operation Manager', SIN: '684 872 757', DOB: 'February 25, 1979', Phone: '250-497-5116', Email: 'MichaelMKelly@teleworm.us', Street: '1004 Haaglund Rd', PostalCode: 'V0H 1R0', City:'Okanagan Falls',Province:'BC', Country:'CA' },
  { Salutation: 'Mr.', FirstName: 'Alexander', LastName: 'M. Lee', Title: 'Powerhouse electrician', SIN: '684 872 757', DOB: 'April 5, 1980', Phone: '514-779-6482', Email: 'AlexanderMLee@dayrep.com', Street: '4777 rue Levy', PostalCode: 'H3C 5K4', City:'Montreal',Province:'BC', Country:'CA' },

];

const Contacts = [

];
Accounts.forEach(({Salutation, FirstName, LastName, Title, SIN, DOB, Phone, Email, Street, PostalCode, City,Province, Country }) => {
  test(`${FirstName}: ${LastName}: ${Title}: ${SIN}: ${DOB}: ${Phone}: ${Email}: ${Street}:${PostalCode}: ${City}: ${Province}: ${Country}`, async ({ page }) => {
  const CJ = new ConnectJunctionSF(page);
  await page.goto('https://login.salesforce.com');
  CJ.fillUsername('cj.securityreview@cloudjunction.cloud');
  CJ.fillPassword('Salesforce5');
  CJ.ClickLogin();
  await page.goto("https://cloudjunctionadvisors42-dev-ed.develop.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
  CJ.ClickNew();
  CJ.Input_Name(FirstName,LastName);
  CJ.Input_Phone(Phone);
  CJ.Input_Street(Street);
  CJ.Input_PostalCode(PostalCode); 
  CJ.Input_City(City);
  CJ.Input_Province(Province);
  CJ.Input_Country(Country);
  CJ.Click_Save();
  //await page.click('button[title="Save"]');
  let Name: string=FirstName + LastName;
  let Address: string=Street + City +Province +PostalCode + Country;
  await expect(page.getByText(Name).first()).toBeVisible();
  await expect(page.getByText(Address).first()).toBeVisible();

  await page.getByRole('button', { name: 'Sync To Quickbooks' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Account posted.');
});

});