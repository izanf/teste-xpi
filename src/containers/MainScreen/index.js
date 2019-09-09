import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Types as albumsTypes } from 'store/albums';

import Theme from 'containers/Theme';
import SearchInput from './components/SearchInput';
import ListCards from './components/ListCards';

class  MainScreen extends Component {
  constructor() {
    super();

    this.state = {
      search: ''
    };
  }

  onSearch = search => {
    const { fetchAlbum } = this.props;

    this.setState({ search }, () => fetchAlbum(search));
  }

  componentDidMount() {
    const { search } = this.props.match.params;

    if (search) {
      this.onSearch(search.split('-').join(' '));
    }
  }

  render() {
    const { search } = this.state;
    const { albums } = this.props;

    return (
      <Theme>
        <SearchInput
          label="Busque por artistas, álbuns ou músicas"
          placeholder="Comece a escrever..."
          value={search}
          onChange={this.onSearch}
        />
        {albums.items && 
        <ListCards search={search} data={albums.items} />}
      </Theme>
    );
  }
}

const mapStateToProps = state => ({ albums: state.albums.current });

const mapDispatchToProps = dispatch => ({
  fetchAlbum: search => dispatch({ type: 'albums/GET_ALBUM', search }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
