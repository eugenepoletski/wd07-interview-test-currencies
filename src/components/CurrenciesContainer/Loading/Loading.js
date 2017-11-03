import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loading.scss'

const defaultProps = {
  
}

const propTypes = {
  
}

const Loading = props => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  )
}

Loading.defaultProps = defaultProps
Loading.propTypes = propTypes

export default Loading