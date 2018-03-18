import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextField } from './TextField';

import { login } from './actions';

const LoginForm = styled.form`
    margin: 0 auto,
    max-width: 400px,
    padding: 3rem 0 0 0,
`;

const LoginTitle = styled.h1`
    font-size: 1.75rem,
    margin-bottom: 3rem,
`;

export class AuthenticationComponent extends Component {
    state = {
        login: '',
        password: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.login(this.state);
    };
    handleChange = name => event => {
        event.preventDefault();
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { error } = this.props;
        const { login, password } = this.state;
        return (
            <LoginForm id="login_form" onSubmit={this.handleSubmit}>
                <LoginTitle>Connectez-vous !</LoginTitle>
                {error && <p>{error.message}</p>}

                <TextField
                    name="login"
                    label="Login"
                    value={login}
                    onChange={this.handleChange('login')}
                />

                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={this.handleChange('password')}
                />

                <button type="submit">Se connecter</button>
            </LoginForm>
        );
    }
}

AuthenticationComponent.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }),
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    error: state.authentication.error,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(
    AuthenticationComponent,
);
