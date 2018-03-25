import React from 'react';
import PropTypes from 'prop-types';

import { DataProvider } from '../DataProvider';

export const WishesView = ({ wishes }) => (
    <div>
        <h1>Wishes</h1>
        {wishes && wishes.map(wish => <h2 key={wish.id}>{wish.title}</h2>)}
    </div>
);

WishesView.propTypes = {
    wishes: PropTypes.array,
};

export const Wishes = ({ location }) => (
    <DataProvider
        url="/wishes"
        location={location}
        render={({ data }) => <WishesView wishes={data} />}
    />
);

Wishes.propTypes = {
    location: PropTypes.object,
};
