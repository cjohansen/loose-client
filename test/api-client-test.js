import createApiClient from '../src/api-client';
import sinon from 'sinon';
import {assert} from 'chai';

describe('api client', () => {
  describe('login', () => {
    let apiClient, server;

    beforeEach(() => {
      apiClient = createApiClient({host: 'lolcathost'});
      server = sinon.fakeServer.create();
    });

    afterEach(() => {
      server.restore();
    });

    it('POSTs to create session endpoint', () => {
      const promise = apiClient.login('christian');

      assert.equal(server.requests[0].method, 'POST');
      assert.equal(server.requests[0].url, 'http://lolcathost/api/sessions');
      assert.match(server.requests[0].requestHeaders['content-type'], /application\/json/);
      const body = JSON.parse(server.requests[0].requestBody);
      assert.deepEqual(body, {user: 'christian'});
    });

    it('resolves promise when server responds', () => {
      const promise = apiClient.login('christian');

      server.requests[0].respond(
        200,
        {'Content-type': 'application/json'},
        JSON.stringify({body: {user: 'christian'}})
      );

      return promise.
        then(user => {
          assert.equal(user.user, 'christian');
        });
    });
  });
});
