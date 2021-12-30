import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer/usereducer';
import MainContainer from './components/MainContainer';
import thunk from 'redux-thunk';
// const thunkmiddlware = require('redux-thunk').default;
// const applymiddlware = redux.applymiddlware;
const store = createStore(rootReducer, applyMiddleware(thunk));
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// 72fc7e8580f42b1efd5d67050e86042e
// Tc=Tk-273.15
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
