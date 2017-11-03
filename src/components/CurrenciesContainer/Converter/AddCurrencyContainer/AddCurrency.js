import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compareByPropAsc } from '../../../../utils/comparators'
import styles from './AddCurrency.scss'
import CurrencyDropList from '../../common/CurrencyDropList/CurrencyDropList'

const defaultProps = {
  baseCurrencyId: '',
  currencies: []
}

const propTypes = {
  addCurrency: PropTypes.func.isRequired,
  baseCurrencyId: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired
}

class AddCurrency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCurrencyDropListVisible: false,
    }
  }

  handleAddClick() {
    this.setState({
      isCurrencyDropListVisible: true
    })
  }

  handleCurrencyClick(currencyId) {
    this.props.addCurrency(currencyId)
    this.setState({ isCurrencyDropListVisible: false })
  }

  render() {
    const props = this.props
  
    return (
      <div className={styles.container}>
        <CurrencyDropList
          currencies={props.currencies.sort( compareByPropAsc('charCode') )}
          isVisible={this.state.isCurrencyDropListVisible}
          handleCurrencyClick={currencyId => this.handleCurrencyClick(currencyId)}
          selectedCurrencyId=''/>
        <span
          className={styles.add}
          onClick={() => this.handleAddClick()}>
          Add currency
        </span>
      </div>
    )
  }
}

AddCurrency.defaultProps = defaultProps
AddCurrency.propTypes = propTypes

export default AddCurrency