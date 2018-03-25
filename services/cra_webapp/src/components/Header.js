import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export const Header = ({ user, onLogout }) => (
    <StyledHeader>
        <Title>JavaScript Playground: meetups</Title>
        {user && <Navigation onLogout={onLogout} />}
    </StyledHeader>
);

Header.propTypes = {
    user: PropTypes.object,
    onLogout: PropTypes.func.isRequired,
};
