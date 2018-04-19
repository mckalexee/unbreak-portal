import SearchBar from '@containers/search-bar.container';
import WeatherList from '@containers/weather-list.container';

import * as React from 'react';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
