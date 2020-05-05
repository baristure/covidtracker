import React from 'react';
import { Line } from 'react-chartjs-2';

import socialDistance from '../../images/social_distance.png';

import styles from './Chart.module.css';

const Chart = ({ chartData, country }) => {
  const arr = chartData.data;

  const countryChart = (
    arr ? <Line
      data={{
        labels: arr.map(item => item.Date),
        datasets: [{
          data: arr.map(item => item.Confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true,
        }, {
          data: arr.map(item => item.Deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        },
        ],
      }}
    />: null
  );

  const image=<img className={styles.image} src={socialDistance} alt="COVID-19" />
  return (
    <div className={styles.container}>
      {country ? countryChart : image }
    </div>
  );
};

export default Chart;