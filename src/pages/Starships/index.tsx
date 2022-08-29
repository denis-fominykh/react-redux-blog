import { Link } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { ItemsList, PageHeader } from 'pages/People/styled';
import { useGetAllStarshipsQuery } from 'redux/starships/query';

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
          data?.results.map(({ name, model }, idx) => (
            <Link key={idx} to={`/starships/${idx + 1}`}>
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
