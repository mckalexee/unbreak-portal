import * as React from 'react';
import { Component } from 'react';

import ExampleContainer from '@containers/example.container';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <ExampleContainer />
        </div>
      </div>
    );
  }
}
