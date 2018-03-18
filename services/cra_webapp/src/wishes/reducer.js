import { handleActions } from 'redux-actions';

import { LOAD_WISHES, LOAD_WISHES_ERROR, LOAD_WISHES_SUCCESS } from './actions';
import { LOGOUT } from '../authentication/actions';

export const defaultState = {
    data: null,
    loading: false,
};

export const reducer = handleActions(
    {
        [LOAD_WISHES]: state => ({
            ...state,
            loading: true,
        }),
        [LOAD_WISHES_ERROR]: (state, { payload: error }) => ({
            ...state,
            loading: false,
            error,
        }),
        [LOAD_WISHES_SUCCESS]: (state, { payload }) => ({
            ...state,
            loading: false,
            data: payload,
        }),
        [LOGOUT]: () => defaultState,
    },
    defaultState,
);

export const hasData = ({ wishes }) => !!wishes.data;

export const getData = ({ wishes }) => wishes.data;

export const isLoading = ({ wishes }) => wishes.loading;
