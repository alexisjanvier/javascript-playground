import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const StyledHeader = styled.header`
    background-color: #222;
    height: 80px;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    font-size: 1.5em;
`;

export const Header = () => (
    <StyledHeader>
        <Title>JavaScript Playground: meetups</Title>
        <Navigation />
    </StyledHeader>
);
