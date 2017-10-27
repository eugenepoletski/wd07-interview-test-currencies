import actionTypes from './actionTypes'
import api from '../api/api'

export const currenciesFetch = () => {
  return dispatch => {
    dispatch( currenciesRequest() )
    // request currencies data
    return api.fetchCurrencies()
    // handle request success
    .then(res => dispatch( currenciesReceive(res) ))
    // handle request failure
    .catch((err) => {
      dispatch( currenciesFetchFail(err) )
    })
  }
}

export const currenciesFetchFail = err => {
  return {
    type: actionTypes.CURRENCIES_FETCH_FAIL,
    payload: err,
    error: true
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

export const errorResetMessage = () => {
  return {
    type: actionTypes.ERROR_RESET_MESSAGE
  }
}

export const uiSelectTab = id => {
  return {
    type: actionTypes.UI_SELECT_TAB,
    payload: id
  }
}