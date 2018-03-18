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

export const appFetch = ({ url, ...config }, token, mode = 'json') =>
    fetch(url, {
        ...config,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
        .then(parseResponse(mode))
        .then(response => ({ response }))
        .catch(error => ({ error }));
