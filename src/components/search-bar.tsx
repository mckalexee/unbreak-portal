import * as React from 'react';
import { Component } from 'react';


export interface ISearchState {
  term: string;
}

export interface ISearchProps {
  onSearchTermChange(term: string): void;
}

export class SearchBar extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);

    this.state = { term: '' };

    // To be able to call set state from a function, you need to bind this
    // otherwise setState will be undefined
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className='col'>
        <div className='input-group search-bar'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Search</span>
          </div>
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            type='text' name='seach-bar'
            className='form-control' />
        </div>
      </div>
    );
  }

  onInputChange(event: React.FormEvent<HTMLInputElement>) {
    const term = event.currentTarget.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}
