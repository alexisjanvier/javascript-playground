import { handleActions } from 'redux-actions';
import { decode } from 'jsonwebtoken';

import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SET_TOKEN,
    LOGOUT,
} from './actions';

export const defaultState = {
    error: null,
    isLogged: false,
};

export const reducer = handleActions(
    {
        [LOGIN]: state => ({
            ...state,
            isLogged: false,
        }),
        [LOGIN_ERROR]: (state, { payload: error }) => ({
            ...state,
            isLogged: false,
            error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: { token } }) => {
            const decryptedPayload = decode(token);

            return {
                ...state,
                isLogged: true,
                ...decryptedPayload,
                token,
            };
        },
        [SET_TOKEN]: (state, { payload: token }) => {
            const decryptedPayload = decode(token);

            return {
                ...state,
                isLogged: true,
                ...decryptedPayload,
                token,
            };
        },
        [LOGOUT]: state => ({
            ...state,
            isLogged: false,
            token: null,
        }),
    },
    defaultState,
);

export const isLogged = state => state.authentication.isLogged;
