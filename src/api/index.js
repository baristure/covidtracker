import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};


// This section will be used later
/*
import axios from 'axios';

const url = 'https://api.covid19api.com';

export const fetchData = async (country) => {
  const { data: {Date:lastUpdate } } = await axios.get(`${url}/summary`);
  if (country) {
    try {
      const { data } = await axios.get(`${url}/live/country/${country}`);
      const modifiedData ={
        TotalConfirmed: data[1].Confirmed,
        TotalDeaths:data[1].Deaths,
        TotalRecovered :data[1].Recovered
      }
      
      return(modifiedData)
    } catch (error) {
      console.log(error) ;
    }
  } else {
    try {
      const { data: {Global: { TotalConfirmed, TotalRecovered, TotalDeaths} } } = await axios.get(`${url}/summary`);

      return { TotalConfirmed, TotalRecovered, TotalDeaths, lastUpdate};
    } catch (error) {
      console.log(error) ;
    }
  }
};

export const fetchDailyData = async (country) => {
  if(country){
    let setDate = new Date();
    try {
      const  data  = await axios.get(`${url}/country/${country.toLowerCase()}?from=2020-03-01T00:00:00Z&to=${setDate.toISOString().substring(0, 10)}T00:00:00Z`);
      return data;
    } catch (error) {
      return error;
    }
  } else{
      try {
        // Used different api key because default api hasn't got global daily values 
        const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
      } catch (error) {
        return error;
      }
  }

};

export const fetchCountries = async () => {
  try {
    const { data:{ Countries } } = await axios.get(`${url}/summary`);

    return Countries.map((country) => country.Country);
  } catch (error) {
    return error;
  }
};*/