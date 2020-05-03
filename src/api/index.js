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

const url2 = 'https://api.covid19api.com';
export const fetchDailyData = async (country) => {
    let setDate = new Date();
    try {
      const  data  = await axios.get(`${url2}/country/${country.toLowerCase()}?from=2020-03-01T00:00:00Z&to=${setDate.toISOString().substring(0, 10)}T00:00:00Z`);
      return data;
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

