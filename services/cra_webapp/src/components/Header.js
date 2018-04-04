import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { UserContext } from '../App';
import { Navigation } from './Navigation';

const StyledHeader = styled.header`
    background-color: #222;
    height: 80px;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    font-size: 1.5em;
`;

export const HeaderWithoutContext = ({ user, onLogout }) => (
    <StyledHeader>
        <Title>JavaScript Playground: meetups</Title>
        {user && <Navigation onLogout={onLogout} />}
    </StyledHeader>
);

HeaderWithoutContext.propTypes = {
    user: PropTypes.object,
    onLogout: PropTypes.func.isRequired,
};

export const Header = () => {
    return (
        <UserContext.Consumer>
            {({ user, onLogout }) => (
                <HeaderWithoutContext user={user} onLogout={onLogout} />
            )}
        </UserContext.Consumer>
    );
};
