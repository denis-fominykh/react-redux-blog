import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, LogoLink, Container, UnorderedList } from 'components/NavBar/styled';

interface NavBarProps {
  children: ReactNode;
}

export function NavBar({ children }: NavBarProps): JSX.Element {
  return (
    <>
      <Navbar>
        <LogoLink to="/">React.JS</LogoLink>
        <UnorderedList>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </UnorderedList>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
