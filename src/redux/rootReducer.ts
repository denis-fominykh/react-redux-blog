import { combineReducers } from 'redux';

import people from 'redux/people/reducers';
import planets from 'redux/planets/slice';

export function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({ people, planets, ...injectedReducers });

  return rootReducer;
}
