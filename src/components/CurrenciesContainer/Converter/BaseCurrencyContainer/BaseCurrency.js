import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  }

  handleDropListControlClick() {
    this.setState({isDropListVisible: !this.state.isDropListVisible})
  }

  render() {
    const props = this.props

    return (
      <div>
        <span>{props.charCode}</span>&nbsp;
        <span>{props.name}</span>
        
        <span
          onClick={() => this.handleDropListControlClick()}>
          {this.state.isDropListVisible ? ( <i>&#9650;</i> ) : ( <i>&#9660;</i> )}
        </span>
        
        <input
          type='number'
          defaultValue={props.amount}
          onBlur={evt => props.setAmount(Number(evt.target.value))}/>
        
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