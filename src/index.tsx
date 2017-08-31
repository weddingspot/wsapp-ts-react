import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Middleware } from 'redux';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { StoreState } from './types';
// import persistState from 'redux-localstorage'

import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const middleware: Array<Middleware> = [
  thunkMiddleware, // lets us dispatch() functions
];

// add state logging to console during development
if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

const store = createStore<StoreState>(
    rootReducer,
    applyMiddleware(...middleware),
);
import App from './App';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
