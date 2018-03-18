import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { App } from './App';
import { rootReducer } from './reducer';
import { configureStore } from './configureStore';
import { sagas } from './sagas';

const { store, history } = configureStore(rootReducer, sagas);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('root'),
);
