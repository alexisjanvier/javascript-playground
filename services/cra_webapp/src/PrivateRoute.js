import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

/**
 * This Route will redirect the user to the login page if needed.
 */
export const PrivateRoute = ({ user, ...rest }) =>
    user ? (
        <Route {...rest} />
    ) : (
        <Redirect
            to={{
                pathname: '/login',
                state: { from: rest.location },
            }}
        />
    );

PrivateRoute.propTypes = {
    user: PropTypes.object,
};
