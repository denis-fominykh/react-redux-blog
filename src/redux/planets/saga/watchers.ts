import { takeLatest } from 'redux-saga/effects';

import {
  getPlanetsDataRequestWorker,
  getPlanetsItemDataRequestWorker,
} from 'redux/planets/saga/workers';
import { getPlanets$request } from 'redux/planets/slice/planetsData';
import { getPlanetsById$request } from 'redux/planets/slice/planetsItemData';

export function* planetsWatcher() {
  yield takeLatest([getPlanets$request], getPlanetsDataRequestWorker);
  yield takeLatest([getPlanetsById$request], getPlanetsItemDataRequestWorker);
}
