import { getColorFromString } from '../helpers/colors';

import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { ChartComponent } from '@components/chart.component';
import { ICityData, IState, } from '@interfaces';

interface IWeatherListProps {
  weather: ICityData[];
}

class WeatherList extends Component<IWeatherListProps> {

  renderWeather(cityData: ICityData) {
    const name = cityData.city.name;
    let min = 0;
    let max = 0;
    const tempData = cityData.list.map(weatherInfo => {
      min = weatherInfo.main.temp_min;
      max = weatherInfo.main.temp_max;
      return {
        value: weatherInfo.main.temp
      };
    });

    const color = getColorFromString(name);
    console.log(color);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <ChartComponent data={tempData} min={min} max={max} color={color} />
        </td>
        <td>Pressure</td>
        <td>Humidity</td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weather }: IState) {
  return { weather };
}

export default connect<IState, any, void>(mapStateToProps)(WeatherList);
