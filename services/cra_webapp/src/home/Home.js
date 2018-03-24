import React from 'react';
import PropTypes from 'prop-types';

import { DataProvider } from '../DataProvider';

export const Home = ({ location }) => (
    <div>
        <h1>Home</h1>
        <DataProvider
            url="/talks"
            location={location}
            render={({ data }) => (
                <h4>Last talk: {data ? data[0].title : ''}</h4>
            )}
        />
        <DataProvider
            url="/wishes"
            location={location}
            render={({ data }) => (
                <h4>Last wish: {data ? data[0].title : ''}</h4>
            )}
        />
        <DataProvider
            url="/members"
            location={location}
            render={({ data }) => (
                <h4>Last member: {data ? data[0].name : ''}</h4>
            )}
        />
    </div>
);

Home.propTypes = {
    location: PropTypes.object,
};
