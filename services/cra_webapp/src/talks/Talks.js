import React from 'react';
import PropTypes from 'prop-types';

import { DataProvider } from '../DataProvider';

export const TalksView = ({ talks }) => (
    <div>
        <h1>Talks</h1>
        {talks && talks.map(talk => <h2 key={talk.id}>{talk.title}</h2>)}
    </div>
);

TalksView.propTypes = {
    talks: PropTypes.array,
};

export const Talks = ({ location }) => (
    <DataProvider
        url="/talks"
        location={location}
        render={({ data }) => <TalksView talks={data} />}
    />
);

Talks.propTypes = {
    location: PropTypes.object,
};
