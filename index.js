import createApiClient from './src/api-client';

const apiClient = createApiClient({
  host: 'localhost:6660'
});
apiClient.login('christian');
