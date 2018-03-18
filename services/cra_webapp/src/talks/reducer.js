import { handleActions } from 'redux-actions';

import { LOAD_TALKS, LOAD_TALKS_ERROR, LOAD_TALKS_SUCCESS } from './actions';

export const defaultState = {
    data: null,
    loading: false,
};

export const reducer = handleActions(
    {
        [LOAD_TALKS]: state => ({
            ...state,
            loading: true,
        }),
        [LOAD_TALKS_ERROR]: (state, { payload: error }) => ({
            ...state,
            loading: false,
            error,
        }),
        [LOAD_TALKS_SUCCESS]: (state, { payload }) => ({
            ...state,
            loading: false,
            data: payload,
        }),
    },
    defaultState,
);

export const hasData = ({ talks }) => !!talks.data;

export const getData = ({ talks }) => talks.data;

export const isLoading = ({ talks }) => talks.loading;
