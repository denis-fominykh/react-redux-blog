import { Link } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { ItemsList, PageHeader } from 'pages/People/styled';
import { useGetAllStarshipsQuery } from 'redux/starships/query';
import { getIdFromLink } from 'utils';

export function Starships(): JSX.Element {
  const { isLoading, isError, data, status } = useGetAllStarshipsQuery();

  return (
    <>
      <PageHeader>
        <h1>Starships</h1>
      </PageHeader>
      <ItemsList>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <h1>{status}</h1>
        ) : (
          data?.results.map(({ name, model, url }) => (
            <Link key={getIdFromLink(url)} to={`/starships/${getIdFromLink(url)}`}>
              <li>
                <h3>{name}</h3>
                Model: {model}
              </li>
            </Link>
          ))
        )}
      </ItemsList>
    </>
  );
}
