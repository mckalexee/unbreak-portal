import * as React from 'react';
import { Component } from 'react';

import BookDetail from '@containers/book-detail.container';
import BookList from '@containers/book-list.container';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}
