import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { PageHeader, PageContent, ButtonReverseLink } from 'pages/Planets/PlanetsItem/styled';
import { useGetPlanetsItemData } from 'redux/planets/hooks';
import { selectPlanetsItemData, selectPlanetsItemLoader } from 'redux/planets/selectors';

type PeopleParams = {
  itemId: string | undefined;
};

export function PlanetsItem(): JSX.Element {
  const { itemId } = useParams<PeopleParams>();
  const getPlanetsData = useGetPlanetsItemData();
  const { name, climate, diameter, gravity, population } = useSelector(
    selectPlanetsItemData,
    shallowEqual,
  );
  const loader = useSelector(selectPlanetsItemLoader, shallowEqual);

  useEffect(() => {
    if (itemId) {
      getPlanetsData(itemId);
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
            <ButtonReverseLink to="/planets">Back</ButtonReverseLink>
          </PageHeader>
          <PageContent>
            <p>Climate: {climate}</p>
            <p>Diameter: {diameter}</p>
            <p>Gravity: {gravity}</p>
            <p>Population: {population}</p>
          </PageContent>
        </>
      )}
    </div>
  );
}
