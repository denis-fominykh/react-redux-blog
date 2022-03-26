import { combineReducers } from '@reduxjs/toolkit';

import { peopleDataReducer } from 'redux/people/reducers/peopleData';
import { peopleItemDataReducer } from 'redux/people/reducers/peopleItemData';

export default combineReducers({
  peopleData: peopleDataReducer,
  peopleItemData: peopleItemDataReducer,
});
