import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Types as authTypes } from 'store/auth';

import Theme from 'containers/Theme';
import SearchInput from './components/SearchInput';
import ListCards from './components/ListCards';

class  MainScreen extends Component {
  componentDidMount() {
    const { login } = this.props;

    login();
  }

  render() {
    return (
      <Theme>
        <SearchInput
          label="Busque por artistas, álbuns ou músicas"
          placeholder="Comece a escrever..."
        />
        <ListCards />
      </Theme>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: authTypes.LOGIN }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
