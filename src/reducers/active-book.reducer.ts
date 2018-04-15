import { BOOK_SELECTED } from '@actions/action-types';
import { IState } from '@interfaces';
import { AnyAction } from 'redux';


export function ActiveBookReducer(state: IState | null = null, action: AnyAction) {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
  }

  return state;
}
