import {} from '../actions/actionTypes'
import { combineReducers } from 'redux'
import currencies from './currencies'
import ui from './ui'

const app = combineReducers({
  currencies,
  ui
});

export default app;