import React from 'react'
import PropTypes from 'prop-types'
import styles from './CurrenciesUpdate.scss'

const defaultProps = {
  isFetching: false,
  lastUpdated: ''
}

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.string.isRequired
}

const CurrenciesUpdate = props => {
  return (
    <div className={styles.container}>
      <span className={styles.updated}>rates updated {props.lastUpdated}</span>
      {props.isFetching &&
      <span className={styles.spinner}></span>
      }
    </div>
  )
}

CurrenciesUpdate.defaultProps = defaultProps
CurrenciesUpdate.propTypes = propTypes

export default CurrenciesUpdate