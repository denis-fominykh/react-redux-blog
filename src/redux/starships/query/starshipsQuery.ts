import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_PATHS } from 'constants/apiPaths';
import type {
  GetStarshipResponseSuccess,
  GetStarshipsResponseSuccess,
} from 'redux/starships/types';

export const starshipsApi = createApi({
  reducerPath: 'starshipsApi',
  tagTypes: ['STARSHIPS'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: builder => ({
    getAllStarships: builder.query<GetStarshipsResponseSuccess, void>({
      query: () => ({
        method: 'GET',
        url: API_PATHS.STARSHIPS._,
      }),
      providesTags: () => [{ type: 'STARSHIPS', id: 'ALL_ITEMS' }],
    }),
    getStarshipById: builder.query<GetStarshipResponseSuccess, string>({
      query: id => API_PATHS.STARSHIPS.BY_ID.replace(':id', id),
      providesTags: () => [{ type: 'STARSHIPS', id: 'ITEM_BY_ID' }],
    }),
  }),
});

export const { useGetAllStarshipsQuery, useGetStarshipByIdQuery } = starshipsApi;
