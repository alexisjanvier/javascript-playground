import { fork } from 'redux-saga/effects';

import { sagas as authenticationSagas } from './authentication/sagas';
import { sagas as fetchSagas } from './services/fetch/fetchSagas';
import { sagas as homeSagas } from './home/sagas';
import { sagas as membersSagas } from './members/sagas';
import { sagas as talksSagas } from './talks/sagas';
import { sagas as wishesSagas } from './wishes/sagas';

export function* sagas() {
    yield fork(authenticationSagas);
    yield fork(fetchSagas);
    yield fork(homeSagas);
    yield fork(membersSagas);
    yield fork(talksSagas);
    yield fork(wishesSagas);
}
