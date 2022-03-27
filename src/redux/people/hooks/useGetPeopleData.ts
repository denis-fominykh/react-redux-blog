import { useDispatch } from 'react-redux';

import { peopleActions } from 'redux/people/actions';

export const useGetPeopleData = () => {
  const dispatch = useDispatch();

  return () => dispatch(peopleActions.fetchData.request({}));
};
