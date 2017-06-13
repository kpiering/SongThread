import { apiKey } from '../../secrets/config';

export const environment = {
  production: true,
  apiKey: apiKey || 'fakeAPIKey',
};
