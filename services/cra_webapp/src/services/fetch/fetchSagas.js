import { call, put, takeEvery, select } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import { appFetch as fetch } from './fetch';

export const fetchError = (type, error) =>
    createAction(
        `${type}_ERROR`,
        payload => payload,
        () => ({
            disconnect: error.code === 401,
        }),
    )(error);

export const fetchSuccess = (type, response) =>
    createAction(`${type}_SUCCESS`)(response);

export function* executeFetchSaga({ type, meta: { request } }) {
    const token = yield select(state => state.authentication.token);
    const { error, response } = yield call(fetch, request, token);
    if (error) {
        yield put(fetchError(type, error));
        return;
    }

    yield put(fetchSuccess(type, response));
}

export const sagas = function*() {
    yield takeEvery(
        action => !!action.meta && action.meta.request,
        executeFetchSaga,
    );
};
