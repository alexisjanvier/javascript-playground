import { createAction } from 'redux-actions';

import host from '../services/host';

export const LOAD_WISHES = 'LOAD_WISHES';
export const LOAD_WISHES_ERROR = 'LOAD_WISHES_ERROR';
export const LOAD_WISHES_SUCCESS = 'LOAD_WISHES_SUCCESS';

export const loadWishes = createAction(
    LOAD_WISHES,
    payload => payload,
    () => ({
        request: {
            url: `${host}/wishes`,
        },
    }),
);

export const loadWishesError = createAction(
    LOAD_WISHES_ERROR,
    payload => payload,
    () => ({
        disconnect: true,
    }),
);

export const loadWishesSuccess = createAction(LOAD_WISHES_SUCCESS);
