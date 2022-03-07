import styled, { keyframes } from 'styled-components/macro';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const HomeContainer = styled.div`
  text-align: center;
`;

export const HomeHeader = styled.header`
  color: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
  font-size: calc(10px + 2vmin);
`;

export const HomeLogoContainer = styled.div`
  min-height: 27vmin;
  min-width: 40vmin;
`;

export const HomeLogo = styled.img`
  height: 20vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;

export const HomeCode = styled.code`
  color: #e15156;
`;

export const HomeLink = styled.a`
  color: #e15156;
`;
