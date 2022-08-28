import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { API_PATHS } from 'constants/apiPaths';
import type { PlanetsDataState, PlanetsDataResponse } from 'redux/planets/types';

const initialState: PlanetsDataState = {
  data: {},
  error: null,
  loading: true,
  succeed: false,
};

export const getPlanets$request = createAction('[PLANETS]/getPlanets$request', () => ({
  payload: {
    url: API_PATHS.PLANETS._,
    method: 'get',
  },
}));

const planetsSlice = createSlice({
  name: '[PLANETS]',
  initialState,
  reducers: {
    getPlanets$start: state => {
      state.loading = true;
      state.error = null;
    },
    getPlanets$success: (state, { payload }: PayloadAction<PlanetsDataResponse>) => {
      state.loading = false;
      state.succeed = true;
      state.data = payload.results;
    },
    getPlanets$error: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload.response.data.detail;
    },
  },
});

export const { getPlanets$start, getPlanets$success, getPlanets$error } = planetsSlice.actions;
export const { reducer } = planetsSlice;
