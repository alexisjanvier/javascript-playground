import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (reducer, sagas, initialState) => {
    const history = createHistory();
    const middlewares = applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
    );

    const devtools =
        typeof window !== 'undefined' && window.devToolsExtension
            ? window.devToolsExtension()
            : f => f;

    const store = createStore(
        combineReducers({
            ...reducer,
            router: routerReducer,
        }),
        initialState,
        compose(middlewares, devtools),
    );

    sagaMiddleware.run(sagas);

    return { store, history };
};
