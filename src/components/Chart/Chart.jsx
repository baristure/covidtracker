import React from 'react';
import { Line } from 'react-chartjs-2';


import styles from './Chart.module.css';

const Chart = ({ chartData, country }) => {
  const arr = chartData.data;
  const countryDates = [];
  const counrtyConfirmed = [];
  const countryDeaths = [];
  if (country) {
    function getValues() {
      for (let i = 0; i < arr.length; i++) {
        countryDates.push(arr[i].Date );
        counrtyConfirmed.push(arr[i].Confirmed);
        countryDeaths.push(arr[i].Deaths);
      }
    };
    getValues();
  }

  const countryChart = (
    <Line
      data={{
        labels: countryDates,
        datasets: [{
          data: counrtyConfirmed,
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true,
        }, {
          data: countryDeaths,
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        },
        ],
      }}
    />
  );

  return (
    <div className={styles.container}>
      {country ? countryChart :null}
    </div>
  );
};

export default Chart;