import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-right: 2rem;
`;

const Logout = styled.span`
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-right: 2rem;
    cursor: pointer;
`;

export const Navigation = ({ onLogout }) => (
    <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/talks">Talks</StyledLink>
        <StyledLink to="/wishes">Wishes</StyledLink>
        <StyledLink to="/members">Members</StyledLink>
        <Logout onClick={onLogout}>Logout</Logout>
    </nav>
);

Navigation.propTypes = {
    onLogout: PropTypes.func.isRequired,
};
