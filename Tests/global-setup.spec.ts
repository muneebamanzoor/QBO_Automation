import { test } from '@playwright/test';
import fs from 'fs';
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 
const link = process.env.linkqbo;
test('runs this test with browser visible', async ({ page }) => {

  await page.goto('https://developer.intuit.com/app/developer/homepage');
      await page.getByRole('button', { name: 'Sign In' }).click();
    
      await page.getByLabel('Email or user ID').click();
      await page.getByLabel('Email or user ID').fill('imrankhan@cloudjunction.cloud');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('Salesforce1?#%');
      await page.getByRole('button', { name: 'Sign in' }).click();

  console.log('Waiting for manual 2FA input...');
  await page.pause();  // Let user enter 2FA manually
  await page.waitForURL('https://sandbox.qbo.intuit.com/app/homepage');
  // Save auth state after successful login
  await page.context().storageState({ path: 'auth/state.json' });
  console.log('Auth state saved to auth.json');
});