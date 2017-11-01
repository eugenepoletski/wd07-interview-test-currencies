import { connect } from 'react-redux'
import { converterSetBaseAmount } from '../../../../actions'
import BaseCurrency from './BaseCurrency'

const mapStateToProps = state => {
  const baseCurrency = state.currencies.byIds[ state.converter.baseCurrencyId ]
  
  return {
    amount: state.converter.amount,
    charCode: baseCurrency.charCode,
    name: baseCurrency.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAmount: amount => dispatch( converterSetBaseAmount(amount) )
  }
}

const BaseCurrencyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseCurrency)

export default BaseCurrencyContainer