import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, LogoLink, Container } from 'components/NavBar/styled';

interface NavBarProps {
  children: ReactNode;
}

export function NavBar({ children }: NavBarProps): JSX.Element {
  return (
    <>
      <Navbar>
        <LogoLink to="/">React.JS</LogoLink>
        <ul>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
