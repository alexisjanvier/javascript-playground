import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Spinner } from '../components/Spinner';

export const Home = ({ isLoading, member, talk, wish }) => (
    <div>
        <h1>Home</h1>
        {isLoading && <Spinner />}
        {talk && <h4>Last talk: {talk.title}</h4>}
        {wish && <h4>Last wish: {wish.title}</h4>}
        {member && <h4>Last member: {member.name}</h4>}
    </div>
);

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    talk: PropTypes.object,
    wish: PropTypes.object,
    member: PropTypes.object,
};

const mapStateToProps = state => ({
    isLoading:
        state.members.loading || state.talks.loading || state.wishes.loading,
    talk: state.talks.data ? state.talks.data[0] : null,
    wish: state.wishes.data ? state.wishes.data[0] : null,
    member: state.members.data ? state.members.data[0] : null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
