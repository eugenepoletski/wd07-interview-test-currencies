import actionTypes from '../actions/actionTypes'

const initialState = {
  message: '',
  error: false
}

const errors = (state = initialState, action) => {
  const {type, payload, error} = action

  if (error === true) {
    return Object.assign({}, state,
      {
        message: String(payload),
        error: true
      }
    )
  }

  switch (type) {
    case actionTypes.ERRORS_RESET_MESSAGE:
      return Object.assign({}, state, initialState)

    default:
      return state
  }
}

export default errors