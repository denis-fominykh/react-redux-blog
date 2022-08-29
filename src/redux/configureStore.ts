import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootQueryMiddleware } from 'redux/rootQueryMiddleware';
import { rootReducer } from 'redux/rootReducer';
import { rootSaga } from 'redux/rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export function configureAppStore() {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose;
    }

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    /* eslint-enable */
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware().concat(rootQueryMiddleware),
      sagaMiddleware,
    ],
    enhancers: [...enhancers],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
