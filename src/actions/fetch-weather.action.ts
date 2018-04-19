import axios from 'axios';

import { ActionTypes } from '@actions/action-types';
import { OPEN_WEATHER_API_KEY } from '@app/consts';

export interface IFetchWeatherAction {
  type: ActionTypes.FETCH_WEATHER;
  payload: any;
}

export function fetchWeather(city: string): IFetchWeatherAction {
  city = encodeURIComponent(city);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${OPEN_WEATHER_API_KEY}`;

  const request = axios.get(url);

  return {
    type: ActionTypes.FETCH_WEATHER,
    payload: request
  };
}
