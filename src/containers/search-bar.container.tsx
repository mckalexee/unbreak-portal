import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '@actions/actions';
import { IState } from '@interfaces';

interface ISearchBarState {
  term: string;
}

export interface ISearchBarProps {
  fetchWeather: typeof fetchWeather;
}

export interface IDispatchFromProps {
  fetchWeather: typeof fetchWeather;
}

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  constructor(props: any) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ term: event.currentTarget.value });
  }

  onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Get a five-day forecast in your favorite cities'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <div className='input-group-append'>
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect<IState, IDispatchFromProps, void>(null, mapDispatchToProps)(SearchBar);
