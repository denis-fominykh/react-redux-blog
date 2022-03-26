import { peopleActions } from 'redux/people/actions';
import { createApiRequestSaga } from 'redux/wrapperWorkerSaga';

export const getPeopleDataRequestWorker = createApiRequestSaga(peopleActions.fetchData);
export const getPeopleItemDataRequestWorker = createApiRequestSaga(peopleActions.fetchItemData);
