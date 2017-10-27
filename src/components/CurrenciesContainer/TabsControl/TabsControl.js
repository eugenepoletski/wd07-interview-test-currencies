import React from 'react'
import PropTypes from 'prop-types'
import styles from './TabsControl.scss'

const defaultProps = {
  tabs: []
}

const propTypes = {
  tabs: PropTypes.arrayOf( PropTypes.string.isRequired ).isRequired,
  handleTabClick: PropTypes.func.isRequired
}

const TabsControl = props => {
  const tabs = props.tabs.map( tab => {
    const text = tab.charAt(0).toUpperCase() + tab.slice(1)
    return (
      <li
        key={tab}
        className={styles.tab}
        onClick={() => props.handleTabClick(tab)}>
        {text}
      </li>
    )
  })

  return (
    <ul className={styles.tabs}>
      {tabs}
    </ul>
  )
}

TabsControl.defaultProps = defaultProps
TabsControl.propTypes = propTypes

export default TabsControl