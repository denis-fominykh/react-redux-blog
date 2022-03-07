import { useDispatch } from 'react-redux';

import { peopleActions } from 'redux/people/actions';

export const useGetPeopleData = () => {
  const dispatch = useDispatch();

  return (id: string) => dispatch(peopleActions.fetchData.request({ id }));
};
