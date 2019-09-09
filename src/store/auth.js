import { put, takeEvery } from 'redux-saga/effects';

export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE'
};

const initialState = {
  loading: false,
  logged: false
};

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return { ...state, logged: true, loading: false };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

function* login() {
  try {
    const response = yield fetch('http://localhost:8888/login', {
      // mode: 'no-cors',
      // headers: {
      //   'Access-Control-Allow-Origin': 'http://localhost:3000'
      // }
    });

    console.log('responsew', response);
    yield put({ type: Types.LOGIN_SUCCESS });
  } catch (err) {
    yield put({ type: Types.LOGIN_FAILURE });
  }
}

export function* authSaga() {
  yield takeEvery(Types.LOGIN, login);
}
