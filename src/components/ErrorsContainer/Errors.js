import React from 'react'
import PropTypes from 'prop-types'
import styles from './Errors.scss' 

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
    <div className={styles.fade}>
      <div className={styles.modal}>
        <span>{props.message}</span>
        <span
          className={styles.close}
          onClick={props.resetError}>&#10006;</span>
      </div>
    </div>
  )
}

Errors.defaultProps = defaultProps
Errors.propTypes = propTypes

export default Errors