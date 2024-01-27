import { ICustomWorld } from '../support/custom-world';
import { RateQuotePage } from '../pageObjects/RateQuotePage';
import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

//Role Shipper
When('I click on New Quote', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.Notnow).click();
  await page.locator(RateQuotePage.NewQuoteButton).click();
});

When('I select Role as Shipper', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.RoleDropdown).click();
  await page.locator(RateQuotePage.Role).click();
});
When('I select Pickup Location', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.PickupDropdown).click();
  await page.locator(RateQuotePage.Pickup).click();
});
When('I select Delivery Location', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.DeliveryDropdown).click();
  await page.locator(RateQuotePage.DeliveryUS).click();
});
When('I enter Postal Code as {string}', async function (this: ICustomWorld, postalCode: string) {
  const page = this.page!;
  await page.locator(RateQuotePage.PostalCode).fill(postalCode);
});
When('I select Payment Terms as Prepaid', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.PaymentDropdown).click();
  await page.locator(RateQuotePage.Payment).click();
});
When('I enter Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.CommodityDropdown).click({ timeout: 30000 });
  await page.locator(RateQuotePage.CommodityDropdown).fill('BB23k');
  await page.locator(RateQuotePage.Commodity).click({ timeout: 30000 });
  //await page.click(RateQuotePage.USD);
  //console.log('200');
  //const Expected = ' BB23k ';
  //const Actual = await page.textContent(RateQuotePage.Commodity);
  //expect(Actual === Expected);
  //await page.locator(RateQuotePage.FlatRateShipping).click();
  //await page.locator(RateQuotePage.NumberOfPalletsDropdown).click();
  //await page.locator(RateQuotePage.NumberOfPallets).click();
});
When('I click on Get Rate Quote button', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.SaveAs).isEnabled();
  await page.locator(RateQuotePage.RateQuotebutton).click();
});

Then('Quote get Created with Requote button should appear', async function (this: ICustomWorld) {
  const page = this.page!;
  const Expected = ' requote ';
  const Actual = (await page.textContent(RateQuotePage.Requote, { timeout: 130000 }))?.toString();
  expect(Actual === Expected).toBeTruthy();
});

//Canada
When('I select Shipper Pickup Location as Canada', async function (this: ICustomWorld) {
  const page = this.page!;
  //await page.locator(RateQuotePage.Frame);
  await page.locator(RateQuotePage.PickupDropdown).click();
  //await test.setTimeout(13000);
  await page.locator(RateQuotePage.PickupDropdown).fill('A Plus Products Canada');
  await page.locator(RateQuotePage.PickupCA).click({ timeout: 30000 });
  //await expect(RateQuotePage.PickupCA).toBe
});
When('I select Delivery Location as Canada', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.DeliveryDropdown).click();
  await page.locator(RateQuotePage.DeliveryCanada).click();
});
When('I enter Shipper CA Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.FlatRateShipping).click();
  await page.locator(RateQuotePage.NumberOfPalletsDropdown).click();
  await page.locator(RateQuotePage.NumberOdPalletsCA).click();
});
//Maxico
When('I select Delivery Location as Maxico', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.DeliveryDropdown).click();
  await page.locator(RateQuotePage.DeliveryMaxico).click();
});
When('I select Payment Terms as Collect', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.PaymentDropdown).click();
  await page.locator(RateQuotePage.PaymentCollect).click();
});
When('I enter Maxico City Name', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.MaxicoCityDropdown).click();
  await page.locator(RateQuotePage.MaxicoCityName).click();
});

//Role Consignee
When('I select Role as Consignee', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.RoleDropdown).click();
  await page.locator(RateQuotePage.RoleConsignee).click();
});
When('I select Pickup Location as US', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.PickupConsigneeDropdown).click();
  await page.locator(RateQuotePage.PickupConsigneeUS).click();
});
When('I select Delivery Location as US', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.DeliveryConsigneeDropdown).click();
  await page.locator(RateQuotePage.DeliveryConsigneeUS).click();
});
When(
  'I enter Postal Code for Consignee as {string}',
  async function (this: ICustomWorld, postalCode: string) {
    const page = this.page!;
    await page.locator(RateQuotePage.PostalCodeConsignee).fill(postalCode);
  },
);
When('I enter Consignee Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.FlatRateShipping).click();
  await page.locator(RateQuotePage.ConsigneeNumberOfPalletsDropdown).click();
  await page.locator(RateQuotePage.ConsigneeNumberOfPallets).click();
});
When('I select Pickup Location as CA', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.PickupConsigneeDropdown).click();
  await page.locator(RateQuotePage.PickupConsigneeCA).click();
});
When('I select Delivery Location as CA', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.DeliveryConsigneeDropdown).click();
  await page.locator(RateQuotePage.DeliveryConsigneeUS).click();
});
When('I select Pickup Location as MX', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.PickupConsigneeDropdown).click();
  await page.locator(RateQuotePage.PickupConsigneeMX).click();
});
When('I select Delivery Location as MX', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.DeliveryConsigneeDropdown).click();
  await page.locator(RateQuotePage.DeliveryConsigneeUS).click();
});
When('I enter Consignee Maxico City Name', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.ConsigneeMaxicoCityDropdown).click();
  await page.locator(RateQuotePage.ConsigneeMaxicoCity).click();
});
When('I enter Consignee Mexico Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.FlatRateShipping).click();
  await page.locator(RateQuotePage.ConsigneeNumberOfPalletsDropdownMX).click();
  await page.locator(RateQuotePage.ConsigneeNumberOfPalletsMX).click();
});

//Bill To
When('I select Role as Bill To', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.RoleDropdown).click();
  await page.locator(RateQuotePage.RoleBillTo).click();
});
When('I select BillTo Pickup Location as US', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillPickupLocationDropdown).click();
  await page.locator(RateQuotePage.BillPickupLocation).click();
});
When(
  'I enter PickUp Postal Code for Bill To as {string}',
  async function (this: ICustomWorld, postalCode: string) {
    const page = this.page!;
    await page.locator(RateQuotePage.BillPickupPostal).fill(postalCode);
  },
);
When('I select BillTo Delivery Location as US', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillDeliveryLocationDropdown).click();
  await page.locator(RateQuotePage.BillDeliveryLocationUS).click();
});
When(
  'I enter Delivery Postal Code for Bill To as {string}',
  async function (this: ICustomWorld, postalCode: string) {
    const page = this.page!;
    await page.locator(RateQuotePage.BillDeliveryPostalCode).fill(postalCode);
  },
);
When('I enter Bill To field', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillToFieldDropdown).click();
  await page.locator(RateQuotePage.BillToField).click();
});
When('I select Bill Payment Terms as Prepaid', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillPaymentDropdown).click();
  await page.locator(RateQuotePage.BillPaymentPrepaid).click();
});
When('I enter Bill To Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.FlatRateShipping).click();
  await page.locator(RateQuotePage.BillNumberOfPalletsDropdown).click();
  await page.locator(RateQuotePage.BillNumberOfPallets).click();
});

// Bill To CA to CA
When('I select BillTo Pickup Location as CA', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillPickupLocationDropdown).click();
  await page.locator(RateQuotePage.BillPickupLocationCA).click();
});
When('I select BillTo Delivery Location as CA', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillDeliveryLocationDropdown).click();
  await page.locator(RateQuotePage.BillDeliveryLocationCA).click();
});

//Bill To MX to MX
When('I select BillTo Pickup Location as MX', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillPickupLocationDropdown).click();
  await page.locator(RateQuotePage.BillPickupLocationMX).click();
});
When('I enter Bill To PickUp Mexico City Name', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillPickupMexicoCityNameDropdown).click();
  await page.locator(RateQuotePage.BillPickupMexicoCityName).click();
});
When('I select BillTo Delivery Location as MX', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillDeliveryLocationDropdown).click();
  await page.locator(RateQuotePage.BillDeliveryLocationMX).click();
});
When('I enter Bill To Delivery Mexico City Name', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillDeliveryMexicoCityNameDropdown).click();
  await page.locator(RateQuotePage.BillDeliveryMexicoCityName).click();
});
When('I enter Bill To MX Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillNumberOfPalletsMXDropdown).click();
  await page.locator(RateQuotePage.BillNumberOfPalletsMX).click();
});

//US to MX
When('I enter Bill To US to MX Delivery Mexico City Name', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillDelUStoMXCityNameDropdown).click();
  await page.locator(RateQuotePage.BillDelUStoMXCityName).click();
});
When('I enter Bill To US to MX Commodity Details', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RateQuotePage.BillPalletsUStoMXDropdown).click();
  await page.locator(RateQuotePage.BillPalletsUStoMX).click();
});
