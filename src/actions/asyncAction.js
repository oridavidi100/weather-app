import axios from 'axios';
const API = '72fc7e8580f42b1efd5d67050e86042e';

export const fetchCountryWeather = (country) => {
  return (dispatch, getState) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${API}`)
      .then((response) => {
        const weather = response.data.list;
        console.log(weather);
        dispatch({
          type: 'FETCH_COUNTRY_WEATHER',
          payload: {
            weather: weather,
            error: '',
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_WEATHER_FAIL',
          payload: { error: error.response.data.message },
        });
      });
  };
};
