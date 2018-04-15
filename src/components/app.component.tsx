import * as React from 'react';
import { Component } from 'react';

import BookList from '@containers/book-list.container';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <BookList />
      </div>
    );
  }
}
