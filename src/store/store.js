import { createStore, applyMiddleware, compose } from 'redux'
import app from '../reducers'
import thunkMiddleware from 'redux-thunk'
import currenciesAutoUpdater from '../middleware/currenciesAutoUpdater'
import initialState from './initialState'

let store;

// Enable Chrome Redux Tool for development
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

store = createStore(
  app,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      currenciesAutoUpdater
    )
  )
);

export default store;