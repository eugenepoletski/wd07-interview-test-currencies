import React from 'react'
import PropTypes from 'prop-types'
import Currency from './Currency/Currency'

const defaultProps = {
  currencies: []
}

const propTypes = {
  handleRemoveCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.array.isRequired,
}

const CurrencyList = props => {
  const currencies = props.currencies
    .map( currency => {
    return (
      <Currency
        key={currency.id}
        {...currency}
        handleRemoveCurrency={props.handleRemoveCurrency}
        /> )
  })

  return (
    <table>
      <tbody>
        {currencies}
      </tbody>
    </table>
  )
}

CurrencyList.defaultProps = defaultProps
CurrencyList.propTypes = propTypes

export default CurrencyList