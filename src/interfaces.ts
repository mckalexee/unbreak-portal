export interface IState {
  posts: IPosts;
  form: any;
}

export interface IPost {
  title: string;
  id: number;
  content: string;
  categories: string;
}

export interface IPosts {
  [key: number]: IPost;
}
