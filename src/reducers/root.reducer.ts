import { IState } from '@interfaces';
import { ActiveBookReducer } from '@reducers/active-book.reducer';
import { BooksReducer } from '@reducers/books.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers<IState>({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});
