import * as _ from 'lodash';

import { FETCH_POSTS } from '@actions/action-types';
import { IPostsAction } from '@actions/fetch-posts.action';
import { IPosts } from '@interfaces';

export function PostsReducer(state: IPosts = {}, action: IPostsAction) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
