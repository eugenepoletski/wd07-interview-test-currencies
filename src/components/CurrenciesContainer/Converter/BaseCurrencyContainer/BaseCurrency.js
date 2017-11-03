import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './BaseCurrency.scss'
import BaseCurrencyDropList from './BaseCurrencyDropList/BaseCurrencyDropList'

const defaultProps = {
  amount: 0,
  charCode: 'n/a',
  name: 'No name'
}

const propTypes = {
  amount: PropTypes.number.isRequired,
  baseCurrencyId: PropTypes.string.isRequired,
  charCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectBase: PropTypes.func.isRequired,
  setAmount: PropTypes.func.isRequired
}

class BaseCurrency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropListVisible: false
    }
  }

  handleCurrencyClick(currencyId) {
    this.props.selectBase(currencyId)
    this.setState({isDropListVisible: false})
  }

  handleDropListControlClick() {
    this.setState({isDropListVisible: !this.state.isDropListVisible})
  }

  render() {
    const props = this.props

    return (
      <div className={styles.container}>
        <span
          className={styles.currency}
          onClick={() => this.handleDropListControlClick()}>
          <span className={styles.code}>{props.charCode}</span>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.icon}>&#9660;</span>
        </span>
        
        <input
          className={styles.amount}
          type='number'
          defaultValue={props.amount}
          onBlur={evt => props.setAmount(Number(evt.target.value))}
          onChange={evt => {
            if (evt.target.value < 0) {
              evt.target.value = 0
            }
          }}/>
        
        <BaseCurrencyDropList
          selectedCurrencyId={props.baseCurrencyId}
          currencies={props.currencies}
          isVisible={this.state.isDropListVisible}
          handleCurrencyClick={currencyId => {this.handleCurrencyClick(currencyId)}}/>
      </div>
    )
  }
}

BaseCurrency.defaultProps = defaultProps
BaseCurrency.propTypes = propTypes

export default BaseCurrency