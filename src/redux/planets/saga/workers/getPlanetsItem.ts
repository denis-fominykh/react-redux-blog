import {
  getPlanetsById$start,
  getPlanetsById$success,
  getPlanetsById$error,
} from 'redux/planets/slice/planetsItemData';
import { createApiRequestSaga } from 'redux/wrapperWorkerSaga';

export const getPlanetsItemDataRequestWorker = createApiRequestSaga({
  start: getPlanetsById$start,
  success: getPlanetsById$success,
  error: getPlanetsById$error,
});
