import logo from 'assets/images/svg/react-router-logo.svg';
import {
  HomeContainer,
  HomeLogoContainer,
  HomeHeader,
  HomeCode,
  HomeLink,
  HomeLogo,
} from 'pages/Home/styled';

export function Home() {
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
