import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { PageHeader, PageContent, ButtonReverseLink } from 'pages/People/PeopleItem/styled';
import { useGetStarshipByIdQuery } from 'redux/starships/query';

type PeopleParams = {
  itemId: string | undefined;
};

export function StarshipsItem(): JSX.Element {
  const { itemId = '1' } = useParams<PeopleParams>();
  const { isLoading, isError, data, status } = useGetStarshipByIdQuery(itemId);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>{status}</h1>
      ) : (
        <>
          <PageHeader>
            <h1>{data?.name}</h1>
            <ButtonReverseLink to="/starships">Back</ButtonReverseLink>
          </PageHeader>
          <PageContent>
            <p>Crew: {data?.crew}</p>
            <p>Length: {data?.length}</p>
            <p>MGLT: {data?.MGLT}</p>
            <p>Starship class: {data?.starship_class}</p>
          </PageContent>
        </>
      )}
    </div>
  );
}
