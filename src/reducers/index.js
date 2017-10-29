import {} from '../actions/actionTypes'
import { combineReducers } from 'redux'
import converter from './converter'
import currencies from './currencies'
import errors from './errors'
import ui from './ui'

const app = combineReducers({
  converter,
  currencies,
  errors,
  ui
});

export default app;