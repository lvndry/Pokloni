import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';

ReactDOM.render(
      <App />
  , document.getElementById('root')
);

registerServiceWorker();
