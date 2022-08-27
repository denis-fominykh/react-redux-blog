import { API_PATHS } from 'constants/apiPaths';
import { createRequestActions } from 'redux/createRequestAction';
import { FetchPeopleItemUrlParams } from 'redux/people/types';

const actionType = '[PEOPLE]';

export const peopleActions = {
  fetchData: createRequestActions<Record<string, never>>(`${actionType}/PEOPLE_FETCH_DATA`, () => ({
    payload: {
      url: API_PATHS.PEOPLE._,
      method: 'get',
    },
  })),
  fetchItemData: createRequestActions<FetchPeopleItemUrlParams>(
    `${actionType}/PEOPLE_ITEM_FETCH_DATA`,
    ({ id }) => ({
      payload: {
        url: API_PATHS.PEOPLE.BY_ID.replace(':id', id),
        method: 'get',
      },
    }),
  ),
};
