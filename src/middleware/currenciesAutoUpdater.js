import actionTypes from '../actions/actionTypes'
import {
  currenciesFetch,
  currenciesResetUpdate,
  currenciesScheduleUpdate
} from '../actions/'

const currenciesAutoUpdater = store => next => action => {
  const dispatch = store.dispatch

  switch (action.type) {
    case actionTypes.CURRENCIES_RECEIVE:
    case actionTypes.CURRENCIES_FETCH_FAIL:
      dispatch( currenciesResetUpdate() )
      
      const timer = setTimeout(() => {
        dispatch( currenciesFetch() )
      }, store.getState().currencies.updateInterval)

      dispatch( currenciesScheduleUpdate( timer ) )
    default:
  }
  return next(action)
}

export default currenciesAutoUpdater