import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import mainReducer from '../reducers';

const middlewares = [ReduxThunk];

if (process.env.NODE_ENV !== 'production') {
    const ReduxLogger = require('redux-logger').default;
    middlewares.push(ReduxLogger);
}

export default createStore(mainReducer, applyMiddleware(...middlewares));
