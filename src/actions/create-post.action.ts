import axios from 'axios';
import { AxiosResponse } from 'axios';

import { CREATE_POST } from '@actions/action-types';
import { API_KEY, API_URL, } from '@app/consts';
import { IPost } from '@interfaces';
import { AnyAction } from 'redux';

export interface IPostsAction extends AnyAction {
  type: string;
  payload: AxiosResponse<IPost[]>;
}

export function createPost(values: {[key: string]: any}, callback: () => void) {
  const request = axios.post<IPost[]>(`${API_URL}/posts?key=${API_KEY}`, values);

  request.then(callback);

  return {
    type: CREATE_POST,
    payload: request
  };
}
