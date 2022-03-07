import { combineReducers } from '@reduxjs/toolkit';

import { peopleDataReducer } from 'redux/people/reducers/peopleData';

export default combineReducers({
  people: peopleDataReducer,
});
