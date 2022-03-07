import { takeLatest } from 'redux-saga/effects';

import { peopleActions } from 'redux/people/actions';
import { getPeopleDataRequestWorker } from 'redux/people/saga/workers';

export function* peopleWatcher() {
  yield takeLatest([peopleActions.fetchData.request], getPeopleDataRequestWorker);
}
