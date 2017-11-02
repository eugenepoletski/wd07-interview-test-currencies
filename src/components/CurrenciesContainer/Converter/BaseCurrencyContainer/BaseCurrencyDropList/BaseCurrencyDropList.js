import React from 'react'
import PropTypes from 'prop-types'

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

const BaseCurrencyDropList = props => {
  if (!props.isVisible) {
    return null
  }

  const currencies = props.currencies.map(currency => {
    let id = currency.id
    return (
      <li
        key={id}
        className={id !== props.selectedCurrencyId ? '' : 'selected'}
        onClick={() => props.handleCurrencyClick(id)}>
        <span>{currency.charCode}</span>
        <span>{currency.name}</span>
      </li>
    )
  })
  
  return (
    <ul>
      {currencies}
    </ul>
  )
}

BaseCurrencyDropList.defaultProps = defaultProps
BaseCurrencyDropList.propTypes = propTypes

export default BaseCurrencyDropList