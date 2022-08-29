import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from 'components/NavBar';
import { Home } from 'pages/Home';
import { People } from 'pages/People';
import { PeopleItem } from 'pages/People/PeopleItem';
import { Planets } from 'pages/Planets';
import { PlanetsItem } from 'pages/Planets/PlanetsItem';
import { Starships } from 'pages/Starships';
import { StarshipsItem } from 'pages/Starships/StarshipsItem';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:itemId" element={<PeopleItem />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:itemId" element={<PlanetsItem />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:itemId" element={<StarshipsItem />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}
