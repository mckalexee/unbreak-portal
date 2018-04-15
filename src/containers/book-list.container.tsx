import { selectBook } from '@actions/actions';
import { IBook, IState } from '@interfaces';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface IStateFromProps {
  books: IBook[];
}

interface IDispatchFromProps {
  selectBook: typeof selectBook;
}

interface IBookListProps {
  books: IBook[];
  selectBook: typeof selectBook;
}

class BookList extends Component<IBookListProps> {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          className='list-group-item'
          key={book.title}
          onClick={e => this.props.selectBook(book)}>
          {book.title}
        </li>
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

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect<IStateFromProps, IDispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(BookList);
