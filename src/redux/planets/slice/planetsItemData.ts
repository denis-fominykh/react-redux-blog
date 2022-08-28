import { createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { API_PATHS } from 'constants/apiPaths';
import type {
  PlanetsData,
  PlanetsItemDataState,
  FetchPlanetsItemUrlParams,
} from 'redux/planets/types';

const initialState: PlanetsItemDataState = {
  data: {},
  error: null,
  loading: true,
  succeed: false,
};

export const getPlanetsById$request = createAction(
  '[PLANETS]/getPlanetsById$request',
  ({ id }: FetchPlanetsItemUrlParams) => ({
    payload: {
      url: API_PATHS.PLANETS.BY_ID.replace(':id', id),
      method: 'get',
    },
  }),
);

const planetsItemSlice = createSlice({
  name: '[PLANETS]',
  initialState,
  reducers: {
    getPlanetsById$start: state => {
      state.loading = true;
      state.error = null;
    },
    getPlanetsById$success: (state, { payload }: PayloadAction<PlanetsData>) => {
      state.loading = false;
      state.succeed = true;
      state.data = payload;
    },
    getPlanetsById$error: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload.response.data.detail;
    },
  },
});
export const { getPlanetsById$start, getPlanetsById$success, getPlanetsById$error } =
  planetsItemSlice.actions;
export const { reducer } = planetsItemSlice;
