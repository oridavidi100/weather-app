import axios from 'axios';
import { countries } from '../data/countries';

const initalState = {
  countries: countries,
  data: [],
  error: '',
};
const rootReducer = (state = initalState, action) => {
  console.log(state);
  switch (action.type) {
    case 'FETCH_COUNTRY_WEATHER':
      const fiveDaysWeather = [
        action.payload.weather[0],
        action.payload.weather[8],
        action.payload.weather[16],
        action.payload.weather[24],
        action.payload.weather[36],
      ];
      return { ...state, data: fiveDaysWeather, error: action.payload.error };
    case 'FETCH_WEATHER_FAIL':
      console.log(action.payload.error);

      return { ...state, error: action.payload.error, data: [] };

    case 'ERROR_RESET':
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default rootReducer;
