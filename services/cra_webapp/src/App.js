import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { decode } from 'jsonwebtoken';

import { Authentication } from './authentication/Authentication';
import { Header } from './components/Header';
import { Home } from './home/Home';
import { Members } from './members/Members';
import { NoMatch } from './components/NoMatch';
import { PrivateRoute } from './PrivateRoute';
import { Talks } from './talks/Talks';
import { Wishes } from './wishes/Wishes';

const Container = styled.div`
    text-align: center;
`;

export class App extends Component {
    state = {
        user: null,
    };

    decodeToken = token => {
        const user = decode(token);
        this.setState({ user });
    };

    componentWillMount() {
        const token = window.sessionStorage.getItem('token');

        if (token) {
            this.decodeToken(token);
        }
    }

    handleNewToken = token => {
        window.sessionStorage.setItem('token', token);
        this.decodeToken(token);
    };

    handleLogout = () => {
        window.sessionStorage.removeItem('token');
        this.setState({ user: null });
    };

    render() {
        const { user } = this.state;
        return (
            <Router>
                <Container>
                    <Header user={user} onLogout={this.handleLogout} />
                    <Switch>
                        <PrivateRoute
                            exact
                            path="/"
                            render={({ location }) => (
                                <Home location={location} />
                            )}
                            user={user}
                        />
                        <PrivateRoute
                            path="/talks"
                            render={({ location }) => (
                                <Talks location={location} />
                            )}
                            user={user}
                        />
                        <PrivateRoute
                            path="/wishes"
                            render={({ location }) => (
                                <Wishes location={location} />
                            )}
                            user={user}
                        />
                        <PrivateRoute
                            path="/members"
                            render={({ location }) => (
                                <Members location={location} />
                            )}
                            user={user}
                        />
                        <Route
                            path="/login"
                            render={({ location }) => (
                                <Authentication
                                    location={location}
                                    onNewToken={this.handleNewToken}
                                />
                            )}
                        />
                        <Route component={NoMatch} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}
