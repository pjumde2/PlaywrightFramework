import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { bearerAuthHeader } from '../APIConfig/APIHeader';
import { ListPhoneBody } from '../APIConfig/APIBody';
import { request } from '@playwright/test';
import { When } from '@cucumber/cucumber';

When('I submit request to List Phone API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/XCN/notes', {
    headers: bearerAuthHeader,
    data: ListPhoneBody,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});
When('I submit request to List Phone API with invalid token', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer1 ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/XCN/notes', {
    headers: bearerAuthHeader,
    data: ListPhoneBody,
  });

  console.log(response.status());
});

When('I submit request to List Phone API with Incorrect URL', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/XCN/notes1', {
    headers: bearerAuthHeader,
    data: ListPhoneBody,
  });

  console.log(response.status());
});
