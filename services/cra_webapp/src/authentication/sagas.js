import { put, select, takeLatest, call } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';

import { LOGIN_SUCCESS, setToken, logout } from './actions';
import { isLogged as getIsLogged } from './reducer';

const saveToken = token => window.sessionStorage.setItem('token', token);
const clearToken = () => window.sessionStorage.removeItem('token');
export const getToken = () => window.sessionStorage.getItem('token');

export function* loginSuccess({ payload: { token } }) {
    yield put(push('/'));
    yield call(saveToken, token);
}

export function* disconnect() {
    yield put(logout());
    yield put(push('/login'));
    yield call(clearToken);
}

export function* handleAuth({ payload: { pathname } }) {
    if (pathname === '/login') {
        return;
    }

    const isLogged = yield select(getIsLogged);

    if (isLogged) {
        return;
    }
    const token = yield call(getToken);
    if (token) {
        yield put(setToken(token));
        return;
    }

    yield put(push('/login'));
}

export const sagas = function*() {
    yield takeLatest(LOGIN_SUCCESS, loginSuccess);
    yield takeLatest(({ meta }) => !!(meta && meta.disconnect), disconnect);
    yield takeLatest(LOCATION_CHANGE, handleAuth);
};
