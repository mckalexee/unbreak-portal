import * as _ from 'lodash';
import { AnyAction } from 'redux';

import { FETCH_POST, FETCH_POSTS } from '@actions/action-types';
import { IPost, IPosts } from '@interfaces';

export function PostsReducer(state: IPosts = {}, action: AnyAction) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      const posts: IPost[] = action.payload.data;
      return _.mapKeys(posts, 'id');
    default:
      return state;
  }
}
