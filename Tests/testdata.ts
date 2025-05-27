import * as XLSX from 'xlsx';
import * as fs from 'fs';

// Load the Excel file
const workbook = XLSX.readFile('Test Data For Testing.xlsx');
const sheetName = workbook.SheetNames[0]; // Get first sheet
const sheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const data = XLSX.utils.sheet_to_json(sheet);

// Format each row into your required structure
export const Accounts = data.map((row: any) => ({
  FirstName: row['FirstName'],
  LastName: row['LastName'],
  Title: row['Title'],
  SIN: row['SIN'],
  DOB: row['DOB'],
  Phone: row['Phone'],
  Email: row['Email'],
  Street: row['Street'],
  PostalCode: row['PostalCode'],
  City: row['City'],
  Province: row['Province'],
  Country: row['Country'],
}));

const Accounts_US = workbook.SheetNames[1]; // Get first sheet
const sheet2 = workbook.Sheets[Accounts_US];

// Convert sheet to JSON
const data2 = XLSX.utils.sheet_to_json(sheet2);

// Format each row into your required structure
const Accounts_US2 = data.map((row: any) => ({
  FirstName: row['FirstName'],
  LastName: row['LastName'],
  Title: row['Title'],
  SIN: row['SIN'],
  DOB: row['DOB'],
  Phone: row['Phone'],
  Email: row['Email'],
  Street: row['Street'],
  PostalCode: row['PostalCode'],
  City: row['City'],
  Province: row['Province'],
  Country: row['Country'],
}));

const Contact_US = workbook.SheetNames[2]; // Get first sheet
const sheet3 = workbook.Sheets[Contact_US];

// Convert sheet to JSON
const data3 = XLSX.utils.sheet_to_json(sheet3);

// Format each row into your required structure
const Contact_US2 = data.map((row: any) => ({
  Salutation: row['Salutation'],
  FirstName: row['First Name'],
  LastName: row['Last Name'],
  Title: row['Title'],
  SIN: row['SIN'],
  DOB: row['DOB'],
  Phone: row['Phone'],
  Email: row['Email'],
  Street: row['Street.M'],
  PostalCode: row['Postal Code.M'],
  City: row['City.M'],
  Province: row['Province.M'],
  Country: row['Country .M']
}));

const Contact_CA = workbook.SheetNames[3]; // Get first sheet
const sheet4 = workbook.Sheets[Contact_CA];

// Convert sheet to JSON
const data4 = XLSX.utils.sheet_to_json(sheet4);

// Format each row into your required structure
const Contact_CA2 = data.map((row: any) => ({
  Salutation: row['Salutation'],
  FirstName: row['First Name'],
  LastName: row['Last Name'],
  Title: row['Title'],
  SIN: row['SIN'],
  DOB: row['DOB'],
  Phone: row['Phone'],
  Email: row['Email'],
  Street: row['Street.M'],
  PostalCode: row['Postal Code.M'],
  City: row['City.M'],
  Province: row['Province.M'],
  Country: row['Country .M']
}));

const Order = workbook.SheetNames[4]; // Get first sheet
const sheet5 = workbook.Sheets[Order];

// Convert sheet to JSON
const data5 = XLSX.utils.sheet_to_json(sheet5);

// Format each row into your required structure
const Order2 = data.map((row: any) => ({
  OrderNumber: row['Order Number'],
  OrderDate: row['Order Date'],
  OrderStatus: row['Order Status:'],
  ShippingAddress: row['Shipping Address'],
  PaymentMethod: row['Payment Method'],
  ShippingMethod: row['Shipping Method'],
  ProductName: row['Product Name'],
  Quantity: row['Quantity'],
  Subtotal: row['Subtotal'],
  ShippingCharges: row['shipping charges'],
  Taxes: row['taxes'],
  TotalAmount: row['Total amount'],
  Discount: row['Discount']
}));

const Invoice = workbook.SheetNames[5]; // Get first sheet
const sheet6 = workbook.Sheets[Invoice];

// Convert sheet to JSON
const data6 = XLSX.utils.sheet_to_json(sheet6);

// Format each row into your required structure
const Invoice2 = data.map((row: any) => ({
  Balance: row['Balance'],
  Customer: row['Customer'],
  Description: row['Description'],
  Name: row['Name'],
  InvoiceDate: row['Invoice Date'],
  DueDate: row['Due date'],
  Status: row['Status'],
  TotalAmount: row['Total Amount'],
  Tax: row['Tax']
}));

const InvoiceLines = workbook.SheetNames[6]; // Get first sheet
const sheet7 = workbook.Sheets[InvoiceLines];

// Convert sheet to JSON
const data7 = XLSX.utils.sheet_to_json(sheet7);

// Format each row into your required structure
const InvoiceLines2 = data.map((row: any) => ({
  Amount: row['Amount'],
  Description: row['Description'],
  DetailType: row['DetailType'],
  Discount: row['Discount'],
  SalesItem: row['SalesItem'],
  Quantity: row['Quantity'],
  UnitPrice: row['Unit Price'],
  Tax: row['Tax']
}));

const Products = workbook.SheetNames[7]; // Get first sheet
const sheet8 = workbook.Sheets[Products];

// Convert sheet to JSON
const data8 = XLSX.utils.sheet_to_json(sheet8);

// Format each row into your required structure
const Products2 = data.map((row: any) => ({
  Description: row['Description'],
  QuantityAvailable: row['Quantity Available'],
  Name: row['Name'],
  Active: row['Active'],
  Type: row['Type'],
  InventoryStartDate: row['Inventory Start date'],
  SKU: row['SKU']
}));

const PaymentTransaction = workbook.SheetNames[8]; // Get first sheet
const sheet9 = workbook.Sheets[PaymentTransaction];

// Convert sheet to JSON
const data9 = XLSX.utils.sheet_to_json(sheet9);

// Format each row into your required structure
const PaymentTransaction2 = data.map((row: any) => ({
  Customer: row['Customer'],
  Amount: row['Amount'],
  PaymentMethod: row['Payment Method'],
  Status: row['Status'],
  TransactionDate: row['Transaction Date'],
  InvoiceID: row['Invoice ID'],
  ReferenceNumber: row['Reference Number'],
  Description: row['Description'],
  QuantityAvailable: row['Quantity Available'],
  Name: row['Name'],
  Active: row['Active'],
  Type: row['Type'],
  InventoryStartDate: row['Inventory Start Date'],
  SKU: row['SKU']
}));