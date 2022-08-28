import { takeLatest } from 'redux-saga/effects';

import {
  getPlanetsDataRequestWorker,
  getPlanetsItemDataRequestWorker,
} from 'redux/planets/saga/workers';
import { getPlanetsById$request } from 'redux/planets/slice/planetsItemSlice';
import { getPlanets$request } from 'redux/planets/slice/planetsSlice';

export function* planetsWatcher() {
  yield takeLatest([getPlanets$request], getPlanetsDataRequestWorker);
  yield takeLatest([getPlanetsById$request], getPlanetsItemDataRequestWorker);
}
