import { AnyAction } from 'redux';

import { ActionTypes } from '@actions/action-types';

export function weatherReducer(state: any[] = [], action: AnyAction) {
  console.log('Action:', action);
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      if (action.error) {
        return state;
      }
      return [action.payload.data, ...state];
  }


  return state;
}
