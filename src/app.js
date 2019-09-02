import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from 'constants/globalStyle';

import MainScreen from 'containers/MainScreen';

const Routes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route exact path="/" component={MainScreen} />
  </BrowserRouter>
);

export default Routes;
