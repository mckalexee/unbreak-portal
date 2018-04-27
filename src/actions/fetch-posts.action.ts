import axios from 'axios';
import { AxiosResponse } from 'axios';

import { FETCH_POSTS } from '@actions/action-types';
import { API_KEY, API_URL, } from '@app/consts';
import { IPost } from '@interfaces';
import { AnyAction } from 'redux';

export interface IPostsAction extends AnyAction {
  type: string;
  payload: AxiosResponse<IPost[]>;
}


export function fetchPosts() {
  const request = axios.get<IPost[]>(`${API_URL}/posts?key=${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
