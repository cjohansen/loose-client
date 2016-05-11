import addActions from '../src/actions';
import {EventEmitter} from 'events';
import {assert} from 'chai';
import sinon from 'sinon';
sinon.assert.expose(assert, {prefix: ''});

describe('actions', () => {
  let events;

  beforeEach(() => {
    events = new EventEmitter();
  });

  describe('login', () => {
    it('logs in user with api client', () => {
      const apiClient = {
        login: sinon.stub().returns(new Promise((resolve, reject) => {}))
      };

      addActions(apiClient, events, () => {});
      events.emit('login', 'Guri');

      assert.calledWith(apiClient.login, 'Guri');
      assert.calledOnce(apiClient.login);
    });

    it('renders with user when logged in', done => {
      const apiClient = {
        login: sinon.stub().returns(Promise.resolve({user: 'Guri'}))
      }

      addActions(apiClient, events, data => {
        console.log('YOLO');
        done();
      });

      events.emit('login', 'Guri');
    })

    it('', () => {
      const apiClient = {
        login: sinon.stub().returns(Promise.reject(new Error('Username taken')))
      }
    })
  });
});
