import { IBook } from '@interfaces';

export function BooksReducer(): IBook[] {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 99 }
  ];
}

