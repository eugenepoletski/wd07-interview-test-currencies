import actionTypes from '../actions/actionTypes'

const ui = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UI_SELECT_TAB:
      return Object.assign({}, state,
      {
        selectedTabId: action.payload
      })
    default:
      return state;
  }
}

export default ui;