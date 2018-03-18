import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../authentication/actions';
import { isLogged } from '../authentication/reducer';

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

// export const Navigation = ({ isLogged, logout }) => (
export class Navigation extends Component {
    handleLogout = () => {
        window.sessionStorage.removeItem('token');
        this.props.logout();
    };

    render() {
        const { isLogged } = this.props;
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

Navigation.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isLogged: isLogged(state),
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
