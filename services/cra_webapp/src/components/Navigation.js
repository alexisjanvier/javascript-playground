import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-right: 2rem;
`;

export const Navigation = () => (
    <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/talks">Talks</StyledLink>
        <StyledLink to="/wishes">Wishes</StyledLink>
        <StyledLink to="/members">Members</StyledLink>
    </nav>
);
