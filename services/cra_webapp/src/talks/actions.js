import { createAction } from 'redux-actions';

import host from '../services/host';

export const LOAD_TALKS = 'LOAD_TALKS';
export const LOAD_TALKS_ERROR = 'LOAD_TALKS_ERROR';
export const LOAD_TALKS_SUCCESS = 'LOAD_TALKS_SUCCESS';

export const loadTalks = createAction(
    LOAD_TALKS,
    payload => payload,
    () => ({
        request: {
            url: `${host}/talks`,
        },
    }),
);

export const loadTalksError = createAction(
    LOAD_TALKS_ERROR,
    payload => payload,
    () => ({
        disconnect: true,
    }),
);

export const loadTalksSuccess = createAction(LOAD_TALKS_SUCCESS);
