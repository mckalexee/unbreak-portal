import * as React from 'react';
import { Component } from 'react';


export interface ISearchState {
  term: string;
}

export class SearchBar extends Component<{}, ISearchState> {
  constructor(props: any) {
    super(props);

    this.state = { term: '' };

    // To be able to call set state from a function, you need to bind this
    // otherwise setState will be undefined
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className='col'>
        <div className='input-group'>
          <div className='input-group-append'>
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
    const newValue = this.formatCode(event.currentTarget.value);
    this.setState({ term: newValue });
  }

  formatCode(inputString: string) {
    let outputString = inputString;
    outputString = outputString.replace(' ', '-');
    outputString = outputString.toLowerCase();
    return outputString;
  }
}
