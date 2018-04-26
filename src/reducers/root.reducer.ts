import { IState } from '@interfaces';
import { ExampleReducer } from '@reducers/example.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers<IState>({
  foo: ExampleReducer,
});
