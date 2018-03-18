import { put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { loadTalks } from './actions';
import { hasData } from './reducer';

export function* handleTalksLoading() {
    if (yield select(hasData)) {
        return;
    }

    yield put(loadTalks());
}

export const sagas = function*() {
    yield takeLatest(
        action =>
            action.type === LOCATION_CHANGE &&
            action.payload.pathname === '/talks',
        handleTalksLoading,
    );
};
