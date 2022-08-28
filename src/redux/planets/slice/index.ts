import { combineReducers } from '@reduxjs/toolkit';

import { reducer as PlanetsDataReducer } from 'redux/planets/slice/planetsData';
import { reducer as PlanetsItemDataReducer } from 'redux/planets/slice/planetsItemData';

export default combineReducers({
  planetsData: PlanetsDataReducer,
  planetsItemData: PlanetsItemDataReducer,
});
