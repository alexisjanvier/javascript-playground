import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isLoading, getData } from './reducer';
import { Spinner } from '../components/Spinner';

export const Members = ({ isLoading, members }) => (
    <div>
        <h1>Members</h1>
        {isLoading && <Spinner />}
        {members &&
            members.map(member => <h2 key={member.id}>{member.name}</h2>)}
    </div>
);

Members.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    members: PropTypes.array,
};

const mapStateToProps = state => ({
    isLoading: isLoading(state),
    members: getData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
