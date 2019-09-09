import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';

import store from 'store';

import GlobalStyle from 'constants/globalStyle';

import MainScreen from 'containers/MainScreen';
import NotFoundScreen from 'containers/NotFoundScreen';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <Route exact path="/" component={MainScreen} />
      <Route path="/albums/:search" component={MainScreen} />
      {/* <Route component={NotFoundScreen} /> */}
    </Router>
  </Provider>
);

export default App;
