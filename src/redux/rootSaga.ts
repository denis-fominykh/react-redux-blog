import { all, call } from 'redux-saga/effects';

import { peopleWatcher } from 'redux/people/saga/watchers';
import { planetsWatcher } from 'redux/planets/saga/watchers';

export function* rootSaga() {
  yield all([call(peopleWatcher), call(planetsWatcher)]);
}
