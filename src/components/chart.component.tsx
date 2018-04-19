import * as React from 'react';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';

interface IChartComponentProps {
  min: number;
  max: number;
  data: IData[];
  color: string;
}



interface IData {
  value: number;
}

export const  ChartComponent = (props: IChartComponentProps) => {
    const colorID = (Math.random() + 1).toString(36).substring(7);
    const fill = `url(#${colorID})`;
    return (
      <div>
        <AreaChart height={60} width={180} data={props.data}>
            <defs>
              <linearGradient id={colorID} x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor={props.color} stopOpacity={0.8} />
                <stop offset='95%' stopColor={props.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis hide={true} />
            <YAxis domain={[props.min, props.max]} hide={true} />
            <Area type='monotone' dataKey='value' stroke={props.color} fillOpacity={1} fill={fill} dot={false} />
          </AreaChart>
      </div>
    );
};
