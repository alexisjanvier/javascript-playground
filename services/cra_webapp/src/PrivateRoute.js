import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

import { UserContext } from './App';

/**
 * This Route will redirect the user to the login page if needed.
 */
export const PrivateRouteWithoutContext = ({ user, ...rest }) =>
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

PrivateRouteWithoutContext.propTypes = {
    user: PropTypes.object,
};

export const PrivateRoute = props => {
    return (
        <UserContext.Consumer>
            {({ user }) => (
                <PrivateRouteWithoutContext user={user} {...props} />
            )}
        </UserContext.Consumer>
    );
};
