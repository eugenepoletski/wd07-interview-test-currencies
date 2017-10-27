import {} from '../actions/actionTypes'
import { combineReducers } from 'redux'
import currencies from './currencies'
import errors from './errors'
import ui from './ui'

const app = combineReducers({
  currencies,
  errors,
  ui
});

export default app;