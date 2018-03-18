import { put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { loadWishes } from './actions';
import { hasData } from './reducer';

export function* handleWishesLoading() {
    if (yield select(hasData)) {
        return;
    }

    yield put(loadWishes());
}

export const sagas = function*() {
    yield takeLatest(
        action =>
            action.type === LOCATION_CHANGE &&
            action.payload.pathname === '/wishes',
        handleWishesLoading,
    );
};
