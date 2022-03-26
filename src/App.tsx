import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from 'components/NavBar';
import { Home } from 'pages/Home';
import { People } from 'pages/People';
import { PeopleItem } from 'pages/People/PeopleItem';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:itemId" element={<PeopleItem />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}
