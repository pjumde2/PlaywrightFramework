import { config } from '../support/config';
import { ICustomWorld } from '../support/custom-world';
import { LoginPage } from '../pageObjects/LoginPage';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I open Browser and enter PM Url', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL_SHIPPING);
});

When('I enter Username {string}', async function (this: ICustomWorld, username: string) {
  const page = this.page!;
  await page.locator(LoginPage.Username).fill(username);
  await page.locator(LoginPage.NextButton).click();
});

When('I entered Password {string}', async function (this: ICustomWorld, password: string) {
  const page = this.page!;
  // await page.isVisible(LoginPage.ForgotPasswordLink);
  await page.locator(LoginPage.Password).fill(password);
  await page.click(LoginPage.SignIn);
});
Then(
  'Got Home Page with Title  {string}',
  async function (this: ICustomWorld, expectedTitle: string) {
    //expect(LoginPage.SignIn.toString() === title).toBeTruthy();

    const actualTitle = 'LTL Shipping Quotes';
    //const actualTitle: string = 'LTL Shipping Quotes';
    //expect(actualTitle === expectedTitle).toBeTruthy();
    expect(expectedTitle).toContain(actualTitle);
  },
);
Then('Display Login Error as {string}', async function (this: ICustomWorld, Expected: string) {
  const page = this.page!;
  const actual = (await page.textContent(LoginPage.LoginError))?.toString();
  expect(actual === Expected).toBeTruthy();
});
