import { handleActions } from 'redux-actions';

import {
    LOAD_MEMBERS,
    LOAD_MEMBERS_ERROR,
    LOAD_MEMBERS_SUCCESS,
} from './actions';
import { LOGOUT } from '../authentication/actions';

export const defaultState = {
    data: null,
    loading: false,
};

export const reducer = handleActions(
    {
        [LOAD_MEMBERS]: state => ({
            ...state,
            loading: true,
        }),
        [LOAD_MEMBERS_ERROR]: (state, { payload: error }) => ({
            ...state,
            loading: false,
            error,
        }),
        [LOAD_MEMBERS_SUCCESS]: (state, { payload }) => ({
            ...state,
            loading: false,
            data: payload,
        }),
        [LOGOUT]: () => defaultState,
    },
    defaultState,
);

export const hasData = ({ members }) => !!members.data;

export const getData = ({ members }) => members.data;

export const isLoading = ({ members }) => members.loading;
