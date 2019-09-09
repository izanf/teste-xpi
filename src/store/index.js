import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { authReducer, authSaga } from 'store/auth';
import { albumsReducer, albumsSaga } from 'store/albums';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  auth: authReducer,
  albums: albumsReducer
});

function* sagas() {
  yield all([fork(authSaga), fork(albumsSaga)]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;
