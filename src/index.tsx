import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App';
import { GlobalStyle } from 'assets/style/globalStyle';
import { configureStore } from 'redux/configureStore';
import reportWebVitals from 'reportWebVitals';

const initialState = {};
const store = configureStore(initialState);

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
