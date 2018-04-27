export interface IState {
  posts: IPosts;
}

export interface IPost {
  title: string;
  id: number;
  content: string;
  tags: string;
}

export interface IPosts {
  [key: number]: IPost;
}
