import { BOOK_SELECTED } from '@actions/action-types';
import { IBook } from '@interfaces';

export function selectBook(book: IBook) {

  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
