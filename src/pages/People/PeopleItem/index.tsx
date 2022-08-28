import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { PageHeader, PageContent, ButtonReverseLink } from 'pages/People/PeopleItem/styled';
import { useGetPeopleItemData } from 'redux/people/hooks';
import { selectPeopleItemData, selectPeopleItemLoader } from 'redux/people/selectors';

type PeopleParams = {
  itemId: string | undefined;
};

export function PeopleItem(): JSX.Element {
  const { itemId } = useParams<PeopleParams>();
  const getPeopleData = useGetPeopleItemData();
  const { name, gender, mass, height, birthYear } = useSelector(selectPeopleItemData, shallowEqual);
  const loader = useSelector(selectPeopleItemLoader, shallowEqual);

  useEffect(() => {
    if (itemId) {
      getPeopleData(itemId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <PageHeader>
            <h1>{name}</h1>
            <ButtonReverseLink to="/people">Back</ButtonReverseLink>
          </PageHeader>
          <PageContent>
            <p>Gender: {gender}</p>
            <p>Mass: {mass}</p>
            <p>Height: {height}</p>
            <p>Birth year: {birthYear}</p>
          </PageContent>
        </>
      )}
    </div>
  );
}
