import { useDispatch } from 'react-redux';

import { getPlanets$request } from 'redux/planets/slice/planetsData';

export const useGetPlanetsData = () => {
  const dispatch = useDispatch();

  return () => dispatch(getPlanets$request());
};
