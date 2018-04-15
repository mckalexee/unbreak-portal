import { IBook, IState } from '@interfaces';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

interface IStateFromProps {
  books: IBook[];
}

interface IBookListProps {
  books: IBook[];
}

class BookList extends Component<IBookListProps> {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className='list-group-item' key={book.title}>{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    books: state.books
  };
}

export default connect<IStateFromProps, {}, void>(mapStateToProps)(BookList);
