import { API_PATHS } from 'constants/apiPaths';
import { createRequestActions } from 'redux/createRequestAction';

const actionType = 'PEOPLE';

export const peopleActions = {
  fetchData: createRequestActions<string>(`${actionType}/PEOPLE_FETCH_DATA`, ({ id }) => ({
    payload: {
      url: API_PATHS.PEOPLE.BY_ID.replace(':id', id),
      method: 'get',
    },
  })),
};
