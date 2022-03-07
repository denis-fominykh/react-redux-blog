import { combineReducers } from 'redux';

import people from 'redux/people/reducers';

export function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({ people, ...injectedReducers });

  return rootReducer;
}
