import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  error: false,
  message: ''
}

const propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  resetError: PropTypes.func.isRequired
}

const Errors = props => {
  if (!props.error) {
    return null
  }

  return (
    <div>
      <span>{props.message}</span>
      <span onClick={props.resetError}>&#10006;</span>
    </div>
  )
}

Errors.defaultProps = defaultProps
Errors.propTypes = propTypes

export default Errors