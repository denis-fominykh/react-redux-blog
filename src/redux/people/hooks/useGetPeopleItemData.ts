import { useDispatch } from 'react-redux';

import { peopleActions } from 'redux/people/actions';

export const useGetPeopleItemData = () => {
  const dispatch = useDispatch();

  return (id: string) => dispatch(peopleActions.fetchItemData.request({ id }));
};
