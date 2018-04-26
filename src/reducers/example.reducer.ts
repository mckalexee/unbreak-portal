import { FOO_ACTION } from '@actions/action-types';
import { IState } from '@interfaces';
import { AnyAction } from 'redux';


export function ExampleReducer(state: IState | null = null, action: AnyAction) {
  switch (action.type) {
    case FOO_ACTION:
      return action.payload;
  }

  return state;
}
