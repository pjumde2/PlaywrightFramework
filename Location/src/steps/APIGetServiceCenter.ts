import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { bearerAuthHeader } from '../APIConfig/APIHeader';
import { request } from '@playwright/test';
import { When } from '@cucumber/cucumber';
When('I submit request to Get Service Center API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/CWA', {
    headers: bearerAuthHeader,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});

When('I submit request to Get Service Center API with invalid token', async function () {
  bearerAuthHeader.Authorization = `Bearer1 ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/CWA', {
    headers: bearerAuthHeader,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});
