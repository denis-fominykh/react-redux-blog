import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, LogoLink, Container, Navigation } from 'components/NavBar/styled';

interface NavBarProps {
  children: ReactNode;
}

export function NavBar({ children }: NavBarProps): JSX.Element {
  return (
    <>
      <Navbar>
        <LogoLink to="/">React.JS</LogoLink>
        <Navigation>
          <ul>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
          </ul>
        </Navigation>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
