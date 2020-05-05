import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist' // local storage
import thunk from 'redux-thunk';

const middlewares = [thunk] 

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)) // (logger)

export const persistor = persistStore(store)

export default {store, persistor};

