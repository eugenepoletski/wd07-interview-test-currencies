import React from 'react'
import PropTypes from 'prop-types'
import AddCurrencyContainer from './AddCurrencyContainer/AddCurrencyContainer'
import BaseCurrencyContainer from './BaseCurrencyContainer/BaseCurrencyContainer'
import CurrencyListContainer from './CurrencyListContainer/CurrencyListContainer'

const defaultProps = {}
const propTypes = {}

const Converter = props => {
  return (
    <div>
      <div>Converter</div>
      <BaseCurrencyContainer />
      <CurrencyListContainer />
      <AddCurrencyContainer />
    </div>
  )
}

Converter.defaultProps = defaultProps
Converter.propTypes = propTypes

export default Converter