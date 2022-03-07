import { useEffect } from 'react';

import logo from 'assets/images/svg/react-router-logo.svg';
import {
  HomeContainer,
  HomeLogoContainer,
  HomeHeader,
  HomeCode,
  HomeLink,
  HomeLogo,
} from 'pages/Home/styled';
import { useGetPeopleData } from 'redux/people/hooks';

export function Home() {
  const getPeopleData = useGetPeopleData();

  useEffect(() => {
    getPeopleData('1');
  }, []);

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeLogoContainer>
          <HomeLogo src={logo} alt="logo" />
        </HomeLogoContainer>
        <p>
          Edit <HomeCode>src/App.tsx</HomeCode> and save to reload.
        </p>
        <HomeLink href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">
          Learn React Router
        </HomeLink>
      </HomeHeader>
    </HomeContainer>
  );
}
