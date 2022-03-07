import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import logo from 'assets/images/svg/react-router-logo.svg';
import {
  HomeContainer,
  HomeLogoContainer,
  HomeHeader,
  HomeCode,
  HomeLink,
  HomeLogo,
} from 'pages/Home/styled';
import { peopleActions } from 'redux/people/actions';

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleActions.fetchData.request({ id: '1' }));
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
