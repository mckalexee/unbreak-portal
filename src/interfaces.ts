
export interface IBook {
  title: string;
  pages: number;
}

export interface IState {
  books: IBook[];
  activeBook: IBook;
}
