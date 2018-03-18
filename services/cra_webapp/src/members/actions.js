import { createAction } from 'redux-actions';

import host from '../services/host';

export const LOAD_MEMBERS = 'LOAD_MEMBERS';
export const LOAD_MEMBERS_ERROR = 'LOAD_MEMBERS_ERROR';
export const LOAD_MEMBERS_SUCCESS = 'LOAD_MEMBERS_SUCCESS';

export const loadMembers = createAction(
    LOAD_MEMBERS,
    payload => payload,
    () => ({
        request: {
            url: `${host}/members`,
        },
    }),
);

export const loadMembersError = createAction(
    LOAD_MEMBERS_ERROR,
    payload => payload,
    () => ({
        disconnect: true,
    }),
);

export const loadMembersSuccess = createAction(LOAD_MEMBERS_SUCCESS);
