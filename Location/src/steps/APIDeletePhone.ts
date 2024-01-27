import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { bearerAuthHeader } from '../APIConfig/APIHeader';
import { DeletePhoneBody } from '../APIConfig/APIBody';
import { request } from '@playwright/test';
import { When } from '@cucumber/cucumber';
When('I submit request to Delete Phone API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.put('/locationv3/3.0/locations/XCN/phones/1', {
    headers: bearerAuthHeader,
    data: DeletePhoneBody,
  });

  console.log(response.status());
});
