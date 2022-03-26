import { takeLatest } from 'redux-saga/effects';

import { peopleActions } from 'redux/people/actions';
import {
  getPeopleDataRequestWorker,
  getPeopleItemDataRequestWorker,
} from 'redux/people/saga/workers';

export function* peopleWatcher() {
  yield takeLatest([peopleActions.fetchData.request], getPeopleDataRequestWorker);
  yield takeLatest([peopleActions.fetchItemData.request], getPeopleItemDataRequestWorker);
}
