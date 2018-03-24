import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import { TextField } from './TextField';
import { appFetch } from '../services/fetch';
import host from '../services/host';

const LoginForm = styled.form`
    margin: 0 auto,
    max-width: 400px,
    padding: 3rem 0 0 0,
`;

const LoginTitle = styled.h1`
    font-size: 1.75rem,
    margin-bottom: 3rem,
`;

export class Authentication extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        onNewToken: PropTypes.func.isRequired,
    };

    state = {
        login: '',
        password: '',
        redirectToReferrer: false,
    };

    handleSubmit = event => {
        event.preventDefault();
        const { login, password } = this.state;

        appFetch({
            url: `${host}/login`,
            body: JSON.stringify({ login, password }),
            method: 'POST',
        })
            .then(({ response: { token } }) => {
                this.props.onNewToken(token);
                this.setState({ error: null, redirectToReferrer: true });
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    handleChange = name => event => {
        event.preventDefault();
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { error, login, password, redirectToReferrer } = this.state;
        const { from } = this.props.location.state || {
            from: { pathname: '/' },
        };

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

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
