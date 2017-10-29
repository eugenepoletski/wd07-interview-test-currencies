import React from 'react'
import PropTypes from 'prop-types'
import CurrencyList from './CurrencyList'
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

const Rates = props => {
  return (
    <div>
      <CurrencyList currencies={props.currencies}>
        <Currency />
      </CurrencyList>
    </div>
  )
}

Rates.defaultProps = defaultProps
Rates.propTypes = propTypes

export default Rates