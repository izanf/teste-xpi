import { put, takeEvery } from 'redux-saga/effects';

const Types = {
  GET_ALBUM: 'albums/GET_ALBUM',
  GET_ALBUM_SUCCESS: 'albums/GET_ALBUM_SUCCESS',
  GET_ALBUM_FAILURE: 'albums/GET_ALBUM',
};

const initialState = {
  loading: false,
  userData: {},
};

export const albumsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.GET_ALBUM:
      return { ...state, loading: true };
    default:
      return state;
  }
};

function* getAlbum() {
  try {
    yield put({ type: Types.GET_ALBUM_SUCCESS });
  } catch (err) {
    yield put({ type: Types.GET_ALBUM_FAILURE });
  }
}

export function* albumsSaga() {
  yield takeEvery(Types.GET_ALBUM, getAlbum);
}
