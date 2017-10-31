import React from 'react'
import PropTypes from 'prop-types'
import styles from './Currency.scss'

const defaultProps = {
  id: '',
  amount: 0,
  charCode: 'n/a',
  name: 'Name not provided'
}

const propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  charCode: PropTypes.string.isRequired,
  handleRemoveCurrency: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

const Currency = props => {
  return (
    <tr className={styles.currency}>
      <td>{props.charCode}</td>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td onClick={()=>props.handleRemoveCurrency(props.id)}>&#10006;</td>
    </tr>
  )
}

Currency.defaultProps = defaultProps
Currency.propTypes = propTypes

export default Currency