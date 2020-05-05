import React from 'react';

import { Cards, CountryPicker, Chart, Footer } from './components';
import { fetchData, fetchDailyData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    chartData: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    const chartData = await fetchDailyData(country);
    this.setState({ data, chartData, country: country });

  }


  render() {
    const { data, country, chartData } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart chartData={country ? chartData : data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;