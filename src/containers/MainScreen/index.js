import React from 'react';

import Theme from 'containers/Theme';
import SearchInput from './components/SearchInput';
import ListCards from './components/ListCards';

const MainScreen = () => (
  <Theme>
    <SearchInput
      label="Busque por artistas, álbuns ou músicas"
      placeholder="Comece a escrever..."
    />
    <ListCards />
  </Theme>
);

export default MainScreen;
