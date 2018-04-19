import { IState } from '@interfaces';
import { combineReducers } from 'redux';

import { weatherReducer } from '@reducers/weather.reducer';

export const rootReducer = combineReducers<IState>({
  weather: weatherReducer
});
