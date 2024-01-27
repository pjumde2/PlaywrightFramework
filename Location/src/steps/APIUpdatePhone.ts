import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { bearerAuthHeader } from '../APIConfig/APIHeader';
import { UpdatePhoneBody } from '../APIConfig/APIBody';
import { request } from '@playwright/test';
import { When } from '@cucumber/cucumber';

When('I submit request to Update Phone API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.put('/locationv3/3.0/phones', {
    headers: bearerAuthHeader,
    data: UpdatePhoneBody,
  });
  sessionVariable.actualStatusCode = response.status();
  console.log(response.status());
});

When(
  'I submit request to Update Phone API with invalid token',
  async function (this: ICustomWorld) {
    bearerAuthHeader.Authorization = `Bearer1 ${sessionVariable.AccessToken}`;
    const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
    const response = await context.put('/locationv3/3.0/phones', {
      headers: bearerAuthHeader,
      data: UpdatePhoneBody,
    });

    console.log(response.status());
  },
);
When(
  'I submit request to Update Phone API with Incorrect URL',
  async function (this: ICustomWorld) {
    bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
    const sic = '';
    UpdatePhoneBody.phone.sicCd = sic;
    const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
    const response = await context.put('/locationv3/3.0/phones1', {
      headers: bearerAuthHeader,
      data: UpdatePhoneBody,
    });

    console.log(response.status());
  },
);
