import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';

// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
