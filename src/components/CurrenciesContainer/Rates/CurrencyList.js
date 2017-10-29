import React from 'react'
import PropTypes from 'prop-types'
import Currency from './Currency'

const defaultProps = {
  currencies: {}
}

const propTypes = {
  currencies: PropTypes.objectOf(
    PropTypes.shape({
      charCode: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nominal: PropTypes.string.isRequired,
      numCode: PropTypes.string.isRequired,
      valueChar: PropTypes.string.isRequired,
      valueNum: PropTypes.number.isRequired
    })
  ).isRequired
}

const CurrencyList = props => {
  let currencies = []

  // ToDo: move sort functionality to redux
  for (let currencyId in props.currencies) {
    currencies.push({
      id: currencyId,
      attributes: props.currencies[ currencyId ]
    })
  }

  // Sort currencies by {String} charCode
  currencies.sort( (a, b) => {
    return a.attributes.charCode > b.attributes.charCode ? 1 : -1
  })

  currencies = currencies.map( currency => {
    return (
      <Currency
        key={currency.id}
        {...currency.attributes} />
    )
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