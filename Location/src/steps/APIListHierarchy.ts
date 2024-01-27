import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { bearerAuthHeader } from '../APIConfig/APIHeader';
import { expect, request } from '@playwright/test';
import { Then, When } from '@cucumber/cucumber';

When('I submit request to Get Hierarchy API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/hierarchy', {
    headers: bearerAuthHeader,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});

Then(
  'I check response I will get sicCd as {string}',
  async function (this: ICustomWorld, Expected: string) {
    bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
    const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
    const response = await context.get('/locationv3/3.0/hierarchy', {
      headers: bearerAuthHeader,
    });
    sessionVariable.actualStatusCode = response.status();
    console.log(response.status());
    console.log(await response.json());
    const jsonResponse = await response.json();
    const Actual = jsonResponse.data.hierarchy[0].sicCd;
    console.log(Actual);
    expect(Actual === Expected).toBeTruthy();
  },
);

When(
  'I submit request to Get Hierarchy API with invalid token',
  async function (this: ICustomWorld) {
    bearerAuthHeader.Authorization = `Bearer1 ${sessionVariable.AccessToken}`;
    const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
    const response = await context.get('/locationv3/3.0/hierarchy', {
      headers: bearerAuthHeader,
    });
    sessionVariable.actualStatusCode = response.status();

    console.log(response.status());
  },
);
