import { ICustomWorld } from '../support/custom-world';
import { sessionVariable } from '../utils/SessionVariable';
import { bearerAuthHeader } from '../APIConfig/APIHeader';
import { ListNoteBody } from '../APIConfig/APIBody';
import { request } from '@playwright/test';
import { When } from '@cucumber/cucumber';

When('I submit request to List Note API', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/UWL/notes', {
    headers: bearerAuthHeader,
    data: ListNoteBody,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});

When('I submit request to List Note API with invalid token', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer1 ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/UWL/notes', {
    headers: bearerAuthHeader,
    data: ListNoteBody,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});

When('I submit request to List Note API with Incorrect URL', async function (this: ICustomWorld) {
  bearerAuthHeader.Authorization = `Bearer ${sessionVariable.AccessToken}`;
  const context = await request.newContext({ baseURL: 'https://tctsi-api.ltl.xpo.com' });
  const response = await context.get('/locationv3/3.0/locations/UWL/notes1', {
    headers: bearerAuthHeader,
    data: ListNoteBody,
  });
  sessionVariable.actualStatusCode = response.status();

  console.log(response.status());
});
