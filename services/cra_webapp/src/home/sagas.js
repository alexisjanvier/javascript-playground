import { put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { loadTalks } from '../talks/actions';
import { loadWishes } from '../wishes/actions';
import { loadMembers } from '../members/actions';

export function* handleHomeLoading() {
    const prepareFetch = function(state) {
        const fetches = [];
        if (!state.talks.data) {
            fetches.push(put(loadTalks()));
        }
        if (!state.members.data) {
            fetches.push(put(loadMembers()));
        }
        if (!state.wishes.data) {
            fetches.push(put(loadWishes()));
        }

        return fetches;
    };
    const preparedFetches = yield select(prepareFetch);
    if (preparedFetches.length) {
        yield preparedFetches;
    }
}

export const sagas = function*() {
    yield takeLatest(
        action =>
            action.type === LOCATION_CHANGE && action.payload.pathname === '/',
        handleHomeLoading,
    );
};
