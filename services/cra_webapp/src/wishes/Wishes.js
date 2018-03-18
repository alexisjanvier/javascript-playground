import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isLoading, getData } from './reducer';
import { Spinner } from '../components/Spinner';

export const Wishes = ({ isLoading, wishes }) => (
    <div>
        <h1>Wishes</h1>
        {isLoading && <Spinner />}
        {wishes && wishes.map(wish => <h2 key={wish.id}>{wish.title}</h2>)}
    </div>
);

Wishes.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    wishes: PropTypes.array,
};

const mapStateToProps = state => ({
    isLoading: isLoading(state),
    wishes: getData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);
