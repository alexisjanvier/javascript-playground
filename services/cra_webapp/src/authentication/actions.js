import { createAction } from 'redux-actions';
import host from '../services/host';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

export const login = createAction(
    LOGIN,
    payload => payload,
    body => ({
        request: {
            url: `${host}/login`,
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        },
    }),
);
export const loginError = createAction(LOGIN_ERROR);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const setToken = createAction(SET_TOKEN);
export const logout = createAction(LOGOUT);
