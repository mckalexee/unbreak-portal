import * as React from 'react';
import { Component } from 'react';


export interface ISearchBarState {
  term: string;
}


export class SearchBar extends Component<{}, ISearchBarState> {
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
