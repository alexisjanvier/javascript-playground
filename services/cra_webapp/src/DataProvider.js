import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';

import host from './services/host';
import { appFetch } from './services/fetch';
import { Spinner } from './components/Spinner';

export class DataProvider extends Component {
    static propTypes = {
        isDataEmpty: PropTypes.func,
        render: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
    };

    static defaultProps = {
        isDataEmpty: data => {
            if (data == undefined) { // eslint-disable-line
                return true;
            }
            return Array.isArray(data)
                ? data.length === 0
                : Object.keys(data).length === 0;
        },
    };

    state = {
        data: undefined,
        isLoading: false,
        showIsLoading: false,
        error: undefined,
    };

    fetchData = async props => {
        this.setState({ isLoading: true });
        const url = `${host}${props.url}`;
        // Only display the loading indicator if the request takes more than 1 second
        setTimeout(() => {
            if (!this.state.data) {
                this.setState({ showIsLoading: true });
            }
        }, 1000);

        try {
            const data = await appFetch({ url });
            this.setState({
                data: data.response,
                error: null,
                isLoading: false,
                showIsLoading: false,
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false,
                showIsLoading: false,
            });
        }
    };

    componentWillMount() {
        return this.fetchData(this.props);
    }

    render() {
        const { data, error, isLoading, showIsLoading } = this.state;
        const { isDataEmpty, location } = this.props;

        if (error) {
            return error.code >= 401 && error.code <= 403 ? (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location.pathname },
                    }}
                />
            ) : (
                <p>Erreur lors du chargement des données</p>
            );
        }

        const showNoData = !isLoading && isDataEmpty(data);

        return (
            <Fragment>
                {showIsLoading && <Spinner />}
                {showNoData ? (
                    <p>Aucune donnée disponible</p>
                ) : (
                    this.props.render({
                        data,
                    })
                )}
            </Fragment>
        );
    }
}
