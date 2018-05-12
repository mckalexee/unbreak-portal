import axios from 'axios';
import { AxiosResponse } from 'axios';

import { FETCH_POST } from '@actions/action-types';
import { API_KEY, API_URL, } from '@app/consts';
import { IPost } from '@interfaces';
import { AnyAction } from 'redux';

export interface IPostAction extends AnyAction {
  type: string;
  payload: AxiosResponse<IPost>;
}


export function fetchPost(id: number) {
  const request = axios.get<IPost>(`${API_URL}/posts/${id}?key=${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
