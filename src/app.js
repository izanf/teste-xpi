import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import GlobalStyle from 'constants/globalStyle';

import MainScreen from 'containers/MainScreen';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path="/" component={MainScreen} />
    </BrowserRouter>
  </Provider>
);

export default App;
