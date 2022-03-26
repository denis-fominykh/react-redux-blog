import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { peopleActions } from 'redux/people/actions';
import { PeopleItemDataState, PeopleData } from 'redux/people/types';

const initialState: PeopleItemDataState = {
  data: {},
  error: null,
  loading: true,
  succeed: false,
};

export const peopleItemDataReducer = createReducer(initialState, {
  [peopleActions.fetchItemData.start.toString()]: () => ({
    ...initialState,
    error: null,
    loading: true,
  }),
  [peopleActions.fetchItemData.success.toString()]: (
    state: PeopleItemDataState,
    { payload }: PayloadAction<PeopleData>,
  ) => ({
    ...state,
    loading: false,
    succeed: true,
    data: payload,
  }),
  [peopleActions.fetchItemData.error.toString()]: (
    state: PeopleItemDataState,
    { payload }: any,
  ) => ({
    ...state,
    loading: false,
    error: payload.response.data.detail,
  }),
});
