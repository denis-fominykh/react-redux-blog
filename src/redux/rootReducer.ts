import { combineReducers } from '@reduxjs/toolkit';

import people from 'redux/people/reducers';
import planets from 'redux/planets/slice';
import { starshipsApi } from 'redux/starships/query';

export const rootReducer = combineReducers({
  people,
  planets,
  [starshipsApi.reducerPath]: starshipsApi.reducer,
});
