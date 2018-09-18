import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
// import './index.css';
import App from './compoments/app';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
