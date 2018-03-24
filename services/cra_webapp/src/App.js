import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import { Header } from './components/Header';
import { NoMatch } from './components/NoMatch';
import { Home } from './home/Home';
import { Talks } from './talks/Talks';
import { Wishes } from './wishes/Wishes';
import { Members } from './members/Members';
import { Authentication } from './authentication/Authentication';

const Container = styled.div`
    text-align: center;
`;

export const App = () => (
    <Router>
        <Container>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={({ location }) => <Home location={location} />}
                />
                <Route
                    path="/talks"
                    render={({ location }) => <Talks location={location} />}
                />
                <Route
                    path="/wishes"
                    render={({ location }) => <Wishes location={location} />}
                />
                <Route
                    path="/members"
                    render={({ location }) => <Members location={location} />}
                />
                <Route path="/login" component={Authentication} />
                <Route component={NoMatch} />
            </Switch>
        </Container>
    </Router>
);
