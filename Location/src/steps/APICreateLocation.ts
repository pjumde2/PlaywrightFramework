import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { createLocationBody, tokenBody } from '../APIConfig/APIBody';
import { bearerAuthHeader, tokenHeader } from '../APIConfig/APIHeader';
import { expect, request } from '@playwright/test';
import { Then, When, Given } from '@cucumber/cucumber';

Given('I generate Valid Token using Username and Password', async function (this: ICustomWorld) {
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.post('/token', {
    headers: tokenHeader,
    form: tokenBody,
  });

  console.log(response.status());
  console.log(await response.json());
  const jsonResponse = await response.json();
  const accessToken = jsonResponse.access_token;
  console.log(accessToken);
  sessionVariable.AccessToken = `${accessToken}`;
  console.log(sessionVariable.AccessToken);
});
When('I submit request to Create Location  API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.post('/locationv3/3.0/locations', {
    headers: bearerAuthHeader,
    data: createLocationBody,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});

Then(
  'I check if response is {int}',
  async function (this: ICustomWorld, expectedStatusCode: number) {
    expect(sessionVariable.actualStatusCode === expectedStatusCode);
  },
);
When(
  'I submit request to Create Location API with invalid token',
  async function (this: ICustomWorld) {
    bearerAuthHeader.Authorization = `Bearer1 ${sessionVariable.AccessToken}`;
    const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
    const response = await context.post('/locationv3/3.0/locations', {
      headers: bearerAuthHeader,
      data: createLocationBody,
    });
    sessionVariable.actualStatusCode = response.status();

    console.log(response.status());
  },
);
When(
  'I submit request to Create Location API with when sicCd is {string}',
  async function (this: ICustomWorld, sicCd: string) {
    bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
    createLocationBody.location.sicCd = sicCd;
    const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
    const response = await context.post('/locationv3/3.0/locations', {
      headers: bearerAuthHeader,
      data: createLocationBody,
    });
    sessionVariable.actualStatusCode = response.status();

    console.log(response.status());
    console.log(await response.json());
  },
);
