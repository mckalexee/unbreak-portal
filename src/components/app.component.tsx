import { SearchBar } from '@containers/search-bar.container';

import * as React from 'react';
import { Component } from 'react';



export class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <SearchBar />
        </div>
      </div>
    );
  }
}
