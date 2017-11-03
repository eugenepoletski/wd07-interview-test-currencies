import React from 'react'
import PropTypes from 'prop-types'
import styles from './CurrencyDropList.scss'

const defaultProps = {
  currencies: [],
  isVisible: false
}

const propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      charCode: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,
  selectedCurrencyId: PropTypes.string.isRequired
}

const CurrencyDropList = props => {
  if (!props.isVisible) {
    return null
  }

  const currencies = props.currencies.map(currency => {
    let id = currency.id
    
    return (
      <li
        key={id}
        className={id !== props.selectedCurrencyId ? styles.item : styles.selected}
        onClick={() => props.handleCurrencyClick(id)}>
        <span className={styles.code}>{currency.charCode}</span>
        <span className={styles.name}>{currency.name}</span>
      </li>
    )
  })
  
  return (
    <ul className={styles.list}>
      {currencies}
    </ul>
  )
}

CurrencyDropList.defaultProps = defaultProps
CurrencyDropList.propTypes = propTypes

export default CurrencyDropList