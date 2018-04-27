import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

// import { App } from '@components/app.component';
import { rootReducer as reducers } from '@reducers/root.reducer';

import { Goodbye } from '@components/goodbye.component';
import { Hello } from '@components/hello.component';

import './styles/index.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/hello' component={Hello} />
        <Route path='/goodbye' component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
