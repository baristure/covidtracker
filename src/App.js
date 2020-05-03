import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData,fetchDailyData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    chartData:{},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    const chartData = await fetchDailyData(country);
    this.setState({ data,chartData, country: country });
    
  }


  render() {
    const { data, country, chartData } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}  />
        <Chart chartData={country ? chartData : data} country={country} /> 
        <div className={styles.footer}>Created by <a href="https://github.com/baristure">Barış TÜRE</a></div>
      </div>
    );
  }
}

export default App;