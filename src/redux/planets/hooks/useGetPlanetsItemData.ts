import { useDispatch } from 'react-redux';

import { getPlanetsById$request } from 'redux/planets/slice/planetsItemData';

export const useGetPlanetsItemData = () => {
  const dispatch = useDispatch();

  return (id: string) => dispatch(getPlanetsById$request({ id }));
};
