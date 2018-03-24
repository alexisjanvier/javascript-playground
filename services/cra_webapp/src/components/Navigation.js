import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export class Navigation extends Component {
    handleLogout = () => {
        window.sessionStorage.removeItem('token');
    };

    render() {
        const isLogged = true;
        if (!isLogged) {
            return <Redirect to="/login" />;
        }
        return (
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/talks">Talks</StyledLink>
                <StyledLink to="/wishes">Wishes</StyledLink>
                <StyledLink to="/members">Members</StyledLink>
                <Logout onClick={this.handleLogout}>Logout</Logout>
            </nav>
        );
    }
}
