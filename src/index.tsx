import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'App';
import { GlobalStyle } from 'assets/style/globalStyle';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { configureStore } from 'redux/configureStore';
import reportWebVitals from 'reportWebVitals';

const initialState = {};
const store = configureStore(initialState);

render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
