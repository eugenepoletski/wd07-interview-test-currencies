import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  amount: 0,
  charCode: 'n/a',
  name: 'No name'
}

const propTypes = {
  amount: PropTypes.number.isRequired,
  charCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired
}

const BaseCurrency = props => {
  return (
    <div>
      <span>{props.charCode}</span>&nbsp;
      <span>{props.name}</span>
      <input
        type='number'
        defaultValue={props.amount}
        onBlur={evt => props.setAmount(Number(evt.target.value))}/>
    </div>
  )
}

BaseCurrency.defaultProps = defaultProps
BaseCurrency.propTypes = propTypes

export default BaseCurrency