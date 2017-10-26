import actionTypes from './actionTypes'
import api from '../api/api'

export const currenciesFetch = () => {
  return dispatch => {
    dispatch( currenciesRequest() )
    return api.fetchCurrencies()
    .then(res => dispatch( currenciesReceive(res) ))
  }
}

export const currenciesReceive = currencies => {
  return {
    type: actionTypes.CURRENCIES_RECEIVE,
    payload: {
      currencies,
      lastUpdated: Date.now()
    }
  }
}

export const currenciesRequest = () => {
  return {
    type: actionTypes.CURRENCIES_REQUEST
  }
}

export const uiSelectTab = id => {
  return {
    type: actionTypes.UI_SELECT_TAB,
    payload: id
  }
}