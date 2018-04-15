import { combineReducers } from 'redux';
import { BooksReducer } from './books.reducer';

export const rootReducer = combineReducers({
  books: BooksReducer
});
