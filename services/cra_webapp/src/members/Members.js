import React from 'react';
import PropTypes from 'prop-types';

import { DataProvider } from '../DataProvider';

export const MembersView = ({ members }) => (
    <div>
        <h1>Members</h1>
        {members &&
            members.map(member => <h2 key={member.id}>{member.name}</h2>)}
    </div>
);

MembersView.propTypes = {
    members: PropTypes.array,
};

export const Members = ({ location }) => (
    <DataProvider
        url="/members"
        location={location}
        render={({ data }) => <MembersView members={data} />}
    />
);

Members.propTypes = {
    location: PropTypes.object,
};
