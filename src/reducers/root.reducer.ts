import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { IState } from '@interfaces';
import { PostsReducer } from '@reducers/posts.reducer';


export const rootReducer = combineReducers<IState>({
  posts: PostsReducer,
  form: formReducer
});
