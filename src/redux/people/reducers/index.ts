import { combineReducers } from '@reduxjs/toolkit';

import { peopleItemReducer } from 'redux/people/reducers/peopleItemReducer';
import { peopleReducer } from 'redux/people/reducers/peopleReducer';

export default combineReducers({
  peopleData: peopleReducer,
  peopleItemData: peopleItemReducer,
});
