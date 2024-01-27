import { ICustomWorld } from '../support/custom-world';
import { RegPage } from '../pageObjects/RegPage';
import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
When('I click on Click Here', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(RegPage.Clickhere).click();
});
When('I enter email Id {string}', async function (this: ICustomWorld, Email: string) {
  const page = this.page!;
  await page.locator(RegPage.Email).fill(Email);
  await page.locator(RegPage.Emailclick).click();
});
Then('Display Error Message {string}', async function (this: ICustomWorld, Expected: string) {
  const page = this.page!;
  const actual = (await page.textContent(RegPage.EmailError, { timeout: 70000 }))?.toString();
  expect(actual === Expected).toBeTruthy();
});

When('I enter email Id as {string}', async function (this: ICustomWorld, Email: string) {
  const page = this.page!;
  await page.locator(RegPage.Email).fill(Email);
  await page.locator(RegPage.EnterButton).click();
});

When('I enter First Name {string}', async function (this: ICustomWorld, FName: string) {
  const page = this.page!;
  await page.locator(RegPage.FirstName).fill(FName);
});
When('I enter Last Name {string}', async function (this: ICustomWorld, LName: string) {
  const page = this.page!;
  await page.locator(RegPage.LastName).fill(LName);
});
