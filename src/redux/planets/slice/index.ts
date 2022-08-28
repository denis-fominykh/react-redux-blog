import { combineReducers } from '@reduxjs/toolkit';

import { reducer as PlanetsItemDataReducer } from 'redux/planets/slice/planetsItemSlice';
import { reducer as PlanetsDataReducer } from 'redux/planets/slice/planetsSlice';

export default combineReducers({
  planetsData: PlanetsDataReducer,
  planetsItemData: PlanetsItemDataReducer,
});
