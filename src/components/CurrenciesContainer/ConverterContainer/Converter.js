import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  selectedCurrencies: {}
}

const propTypes = {
  selectedCurrencies: PropTypes.object.isRequired
}

const Converter = props => {
  const {
    selectedCurrencies
  } = props

  let currencies = []

  for (let currencyId in selectedCurrencies) {
    let { charCode, name, amount } = selectedCurrencies[ currencyId ]

    currencies.push(
      <tr>
        <td>{charCode}</td>
        <td>{name}</td>
        <td>{amount}</td>
      </tr>
    )
  }

  return (
    <div>
      <div>Converter</div>
      <table>
        <tbody>
          {currencies}
        </tbody>
      </table>
    </div>
  )
}

Converter.defaultProps = defaultProps
Converter.propTypes = propTypes

export default Converter