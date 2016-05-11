import createApiClient from './src/api-client';
import createUI from './src/ui';
import addActions from './src/actions';
import {EventEmitter} from 'events';
import {assign} from 'lodash';

const apiClient = createApiClient({
  host: 'localhost:6660'
});

const data = {};
const events = new EventEmitter();
const renderUI = createUI(document.getElementById('app'), events);

function render(changes) {
  assign(data, changes);
  renderUI(data);
}

addActions(apiClient, events, render);

render();
