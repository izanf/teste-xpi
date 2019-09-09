import { put, takeLatest } from 'redux-saga/effects';
import spotifyService from 'services/spotifyService';

const Types = {
  GET_ALBUM: 'albums/GET_ALBUM',
  GET_ALBUM_SUCCESS: 'albums/GET_ALBUM_SUCCESS',
  GET_ALBUM_FAILURE: 'albums/GET_ALBUM',
};

const initialState = {
  loading: false,
  data: [],
  current: {}
};

export const albumsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.GET_ALBUM:
      return { ...state, loading: true };
    case Types.GET_ALBUM_SUCCESS:
      return { ...state, loading: false, current: action.payload };
    default:
      return state;
  }
};

function* getAlbum({ search }) {
  try {
    const response = yield spotifyService.fetchAlbums(`artist:${search}`);
    yield put({ type: Types.GET_ALBUM_SUCCESS, payload: response.albums });
  } catch (err) {
    console.log('err', err);
  }
}

export function* albumsSaga() {
  yield takeLatest(Types.GET_ALBUM, getAlbum);
}
