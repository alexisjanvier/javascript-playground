import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isLoading, getData } from './reducer';
import { Spinner } from '../components/Spinner';

export const Talks = ({ isLoading, talks }) => (
    <div>
        <h1>Talks</h1>
        {isLoading && <Spinner />}
        {talks && talks.map(talk => <h2 key={talk.id}>{talk.title}</h2>)}
    </div>
);

Talks.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    talks: PropTypes.array,
};

const mapStateToProps = state => ({
    isLoading: isLoading(state),
    talks: getData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Talks);
