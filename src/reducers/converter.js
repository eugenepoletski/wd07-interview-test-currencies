import actionTypes from '../actions/actionTypes.js'
import initialState from '../store/initialState'

const converter = (state = initialState.converter, action) => {
  switch (action.type) {
    case actionTypes.CONVERTER_ADD_CURRENCY:
      {
        let currencies = state.selectedByIds
      
        return Object.assign({}, state,
          {
            selectedByIds: currencies
              .slice()
              .concat( action.payload )
          }
        )
      }
    
    case actionTypes.CONVERTER_REMOVE_CURRENCY:
      { 
        let currencies = state.selectedByIds,
          pos = currencies.indexOf(action.payload)

        return Object.assign({}, state,
          {
            selectedByIds: currencies
              .slice(0, pos )
              .concat( currencies.slice(pos + 1) )
          }
        )
      }
    
    case actionTypes.CONVERTER_SELECT_BASE:
      return Object.assign({}, state, {baseCurrencyId: action.payload})
    
    case actionTypes.CONVERTER_SET_BASE_AMOUNT:
      return Object.assign({}, state, {amount: action.payload})
    
    default:
      return state
  }
}

export default converter