export interface PlanetsData {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
}

export interface PlanetsDataResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: PlanetsData[];
}

export interface PlanetsDataState {
  data: Record<string, never> | PlanetsData[];
  error: null | string;
  loading: boolean;
  succeed: boolean;
}

export interface PlanetsItemDataState {
  data: Record<string, never> | PlanetsData;
  error: null | string;
  loading: boolean;
  succeed: boolean;
}

export interface PlanetsReducer {
  planetsData: PlanetsDataState;
  planetsItemData: PlanetsItemDataState;
}

export interface FetchPlanetsItemUrlParams {
  id: string;
}
