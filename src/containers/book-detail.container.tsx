import { IBook, IState } from '@interfaces';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

interface IStateFromProps {
  book: IBook;
}

interface IBookDetailProps {
  book: IBook;
}

class BookDetail extends Component<IBookDetailProps> {
  render() {
    if (!this.props.book) {
      return (
        <div className='col'>Select a book to get started.</div>
      );
    }

    return (
      <div className='col'>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    book: state.activeBook
  };
}

export default connect<IStateFromProps, {}, void>(mapStateToProps)(BookDetail);
