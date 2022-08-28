import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'App';
import { GlobalStyle } from 'assets/style/globalStyle';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { configureStore } from 'redux/configureStore';
import reportWebVitals from 'reportWebVitals';

const initialState = {};
const store = configureStore(initialState);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ErrorBoundary>,
);

reportWebVitals();
