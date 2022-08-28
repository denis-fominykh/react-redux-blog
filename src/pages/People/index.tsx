import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { ItemsList, PageHeader } from 'pages/People/styled';
import { useGetPeopleData } from 'redux/people/hooks';
import { selectPeopleData, selectPeopleLoader } from 'redux/people/selectors';

export function People(): JSX.Element {
  const getPeopleData = useGetPeopleData();
  const people = useSelector(selectPeopleData, shallowEqual);
  const loader = useSelector(selectPeopleLoader, shallowEqual);

  useEffect(() => {
    getPeopleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('people:', people);
    console.log('loader:', loader);
  }, [people, loader]);

  return (
    <>
      <PageHeader>
        <h1>People</h1>
      </PageHeader>
      <ItemsList>
        {loader ? (
          <Loader />
        ) : (
          people.map(({ name, birthYear }, idx) => (
            <Link key={idx} to={`/people/${idx + 1}`}>
              <li>
                <h3>{name}</h3>
                Birth year: {birthYear}
              </li>
            </Link>
          ))
        )}
      </ItemsList>
    </>
  );
}
