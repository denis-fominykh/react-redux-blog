import {
  getPlanets$start,
  getPlanets$success,
  getPlanets$error,
} from 'redux/planets/slice/planetsSlice';
import { createApiRequestSaga } from 'redux/wrapperWorkerSaga';

export const getPlanetsDataRequestWorker = createApiRequestSaga({
  start: getPlanets$start,
  success: getPlanets$success,
  error: getPlanets$error,
});
