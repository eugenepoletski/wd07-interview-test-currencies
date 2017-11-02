import React from 'react'
import PropTypes from 'prop-types'
import styles from './Currency.scss'

const defaultProps = {
  charCode: '',
  name: '',
  nominal: '',
  numCode: '',
  valueChar: '0',
  valueNum: 0
}

const propTypes = {
  charCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nominal: PropTypes.string.isRequired,
  numCode: PropTypes.string.isRequired,
  valueChar: PropTypes.string.isRequired,
  valueNum: PropTypes.number.isRequired
}

const Currency = props => {
  const {
    charCode,
    name,
    nominal,
    numCode,
    valueChar,
    valueNum
  } = props

  return (
    <tr className={styles.currency}>
      <td>{charCode}</td>
      <td>{name}</td>
      <td className={styles.nominal}>{nominal}</td>
      <td className={styles.value}>{valueChar}</td>
    </tr>
  )
}

Currency.defaultProps = defaultProps
Currency.propTypes = propTypes

export default Currency