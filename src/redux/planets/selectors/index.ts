import { PlanetsReducer } from 'redux/planets/types';

interface PlanetsState {
  planets: PlanetsReducer;
}

export const selectPlanetsData = (state: PlanetsState) => state.planets.planetsData.data;
export const selectPlanetsLoader = (state: PlanetsState) => state.planets.planetsData.loading;

export const selectPlanetsItemData = (state: PlanetsState) => state.planets.planetsItemData.data;
export const selectPlanetsItemLoader = (state: PlanetsState) =>
  state.planets.planetsItemData.loading;
