import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { ItemsList, PageHeader } from 'pages/Planets/styled';
import { useGetPlanetsData } from 'redux/planets/hooks';
import { selectPlanetsData, selectPlanetsLoader } from 'redux/planets/selectors';

export function Planets(): JSX.Element {
  const getPlanetsData = useGetPlanetsData();
  const planets = useSelector(selectPlanetsData, shallowEqual);
  const loader = useSelector(selectPlanetsLoader, shallowEqual);

  useEffect(() => {
    getPlanetsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeader>
        <h1>Planets</h1>
      </PageHeader>
      <ItemsList>
        {loader ? (
          <Loader />
        ) : (
          planets.map(({ name, climate }, idx) => (
            <Link key={idx} to={`/planets/${idx + 1}`}>
              <li>
                <h3>{name}</h3>
                Climate: {climate}
              </li>
            </Link>
          ))
        )}
      </ItemsList>
    </>
  );
}
