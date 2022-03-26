export interface PeopleData {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PeopleDataResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: PeopleData[];
}

export interface PeopleDataState {
  data: Record<string, never> | PeopleData[];
  error: null | string;
  loading: boolean;
  succeed: boolean;
}

export interface PeopleItemDataState {
  data: Record<string, never> | PeopleData;
  error: null | string;
  loading: boolean;
  succeed: boolean;
}

export interface PeopleReducer {
  peopleData: PeopleDataState;
  peopleItemData: PeopleItemDataState;
}

export interface FetchPeopleItemUrlParams {
  id: string;
}
