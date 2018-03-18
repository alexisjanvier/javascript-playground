import fetch from 'isomorphic-fetch';

export const parseResponse = mode => response => {
    if (response.status === 204) {
        return null;
    }
    if (response.status >= 200 && response.status < 300) {
        return mode === 'blob' ? response.blob() : response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    error.code = response.status;
    throw error;
};

export const appFetch = ({ url, ...config }, mode = 'json') =>
    fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(parseResponse(mode))
        .then(response => ({ response }))
        .catch(error => ({ error }));
