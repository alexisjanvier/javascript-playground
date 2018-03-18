import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Home } from './home/Home';
import { Talks } from './talks/Talks';
import { Wishes } from './wishes/Wishes';
import { Members } from './members/Members';
import { NoMatch } from './components/NoMatch';

const Container = styled.div`
    text-align: center;
`;

class App extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Fragment>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/talks" component={Talks} />
                            <Route path="/wishes" component={Wishes} />
                            <Route path="/members" component={Members} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Fragment>
                </Router>
            </Container>
        );
    }
}

export default App;
