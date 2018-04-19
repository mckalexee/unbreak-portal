import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import * as ReduxPromise from 'redux-promise';

import { App } from '@components/app.component';
import { rootReducer } from '@reducers/root.reducer';

import './styles/index.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
