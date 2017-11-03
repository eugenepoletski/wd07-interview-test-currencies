import actionTypes from '../actions/actionTypes.js'

const currencies = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CURRENCIES_FETCH_FAIL:
      return Object.assign({}, state, { isFetching: false })

    case actionTypes.CURRENCIES_RECEIVE:
      return Object.assign({}, state,
      {
        isFetching: false,
        lastUpdated: action.payload.lastUpdated,
        byIds: Object.assign({}, state.byIds, action.payload.currencies)
      })
      
    case actionTypes.CURRENCIES_REQUEST:
      return Object.assign({}, state, { isFetching: true })

    case actionTypes.CURRENCIES_RESET_UPDATE:
      clearTimeout( state.updateTimer )
      
      return Object.assign({}, state, {
        updateTimer: null
      })

    case actionTypes.CURRENCIES_SCHEDULE_UPDATE:
      return Object.assign({}, state, {
        updateTimer: action.payload
      })
      
    default:
      return state
  }
}

export default currencies