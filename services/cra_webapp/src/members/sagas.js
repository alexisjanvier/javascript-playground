import { put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { loadMembers } from './actions';
import { hasData } from './reducer';

export function* handleMembersLoading() {
    if (yield select(hasData)) {
        return;
    }

    yield put(loadMembers());
}

export const sagas = function*() {
    yield takeLatest(
        action =>
            action.type === LOCATION_CHANGE &&
            action.payload.pathname === '/members',
        handleMembersLoading,
    );
};
