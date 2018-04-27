import { IState } from '@interfaces';
import { PostsReducer } from '@reducers/posts.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers<IState>({
  posts: PostsReducer,
});
