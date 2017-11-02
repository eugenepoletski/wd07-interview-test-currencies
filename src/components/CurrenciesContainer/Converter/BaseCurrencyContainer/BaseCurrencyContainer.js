import { connect } from 'react-redux'
import {
  converterSetBaseAmount,
  converterSelectBase
} from '../../../../actions'
import { compareByPropAsc } from '../../../../utils/comparators'
import BaseCurrency from './BaseCurrency'

const mapStateToProps = state => {
  const baseCurrencyId = state.converter.baseCurrencyId,
    baseCurrency = state.currencies.byIds[ baseCurrencyId ],
    currencies = []

  for (let currencyId in state.currencies.byIds) {
    const currency = state.currencies.byIds[currencyId]
    
    currencies.push({
      id: currencyId,
      charCode: currency.charCode,
      name: currency.name
    })
  }

  currencies.sort( compareByPropAsc('charCode') )
  
  return {
    baseCurrencyId,
    amount: state.converter.amount,
    charCode: baseCurrency.charCode,
    currencies,
    name: baseCurrency.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectBase: currencyId => dispatch( converterSelectBase(currencyId) ),
    setAmount: amount => dispatch( converterSetBaseAmount(amount) )
  }
}

const BaseCurrencyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseCurrency)

export default BaseCurrencyContainer