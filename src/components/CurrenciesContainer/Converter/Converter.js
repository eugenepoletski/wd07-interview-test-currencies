import React from 'react'
import PropTypes from 'prop-types'
import AddCurrencyContainer from './AddCurrencyContainer/AddCurrencyContainer'
import CurrencyListContainer from './CurrencyListContainer/CurrencyListContainer'

const defaultProps = {}
const propTypes = {}

const Converter = props => {
  return (
    <div>
      <div>Converter</div>
      <AddCurrencyContainer />
      <CurrencyListContainer />
    </div>
  )
}

Converter.defaultProps = defaultProps
Converter.propTypes = propTypes

export default Converter