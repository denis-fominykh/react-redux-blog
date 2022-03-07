import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { People } from 'types/people';
import { peopleActions } from 'redux/people/actions';

interface InitialState {
  data: Record<string, never> | People;
  error: null | string;
  loading: boolean;
  succeed: boolean;
}

const initialState: InitialState = {
  data: {},
  error: null,
  loading: false,
  succeed: false,
};

export const peopleDataReducer = createReducer(initialState, {
  [peopleActions.fetchData.start.toString()]: () => ({
    ...initialState,
    error: null,
    loading: true,
  }),
  [peopleActions.fetchData.success.toString()]: (
    state: InitialState,
    { payload }: PayloadAction<People>,
  ) => ({
    ...state,
    loading: false,
    succeed: true,
    data: payload,
  }),
  [peopleActions.fetchData.error.toString()]: (state: InitialState, { payload }: any) => ({
    ...state,
    loading: false,
    error: payload.response.data.detail,
  }),
});
