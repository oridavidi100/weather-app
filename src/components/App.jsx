import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import './App.css';

import { fetchCountryWeather } from '../actions/asyncAction';

function App({ countries, selectCountry, data, error }) {
  const dispatch = useDispatch;
  // const error = useSelector((state) => state.error);
  const [state, setstate] = useState('');
  const handleClick = () => {
    selectCountry(state);
    console.log(error);
  };
  const day = (index) => {
    const days = ['today', 'tommorow', 'in two Days', 'in three days', 'in four days'];
    return days[index];
  };
  console.log(data);
  return (
    <div className='App'>
      <input type='text' list='countries' onChange={(e) => setstate(e.target.value)} />

      <datalist id='countries'>
        {countries && countries.map((item, key) => <option key={item} value={item} />)}
      </datalist>
      <button type='button' onClick={handleClick} disabled={state === '' ? true : false}>
        submit
      </button>
      <p className='state'>{state} weather:</p>
      <p>{error} </p>
      {data.map((item, index) => (
        <div className='box' key={item}>
          <div class='wave -one'></div>
          <div class='wave -two'></div>
          <div class='wave -three'></div>
          <p>{day(index)}</p>
          <p>{item.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
          <p className='temp'>{(item.main.temp - 273.15).toFixed(2)} C </p>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { countries: state.countries, data: state.data, error: state.error };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectCountry: (state) => {
      dispatch(fetchCountryWeather(state));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
