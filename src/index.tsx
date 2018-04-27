import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import * as promise from 'redux-promise';

// Reducers
import { rootReducer as reducers } from '@reducers/root.reducer';

// Components
import { postsIndex } from '@components/posts-index.component';
import { postsNew } from '@components/posts-new.component';

import './styles/index.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route path='/posts/new' component={postsNew} />
          <Route path='/' component={postsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
