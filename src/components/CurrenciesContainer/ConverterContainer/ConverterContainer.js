import { connect } from 'react-redux'
import Converter from './Converter'

const getSelectedCurrencies = state => {
  const baseCurrencyAmount = state.converter.amount,
    baseCurrencyId = state.converter.baseCurrencyId,
    currencies = state.currencies.byIds,
    selectIds = currencies, // state.converter.selectedByIds,
    result = {}

  const baseCurrency = currencies[ baseCurrencyId ],
    baseCurrencyRate = baseCurrency.valueNum,
    baseCurrencyNominal = Number(baseCurrency.nominal)

  for (let id in selectIds) {
    let {
      codeChar,
      name,
      nominal,
      valueNum
    } = currencies[ id ]

    let currencyAmount = baseCurrencyRate / baseCurrencyNominal * Number( nominal ) / valueNum * baseCurrencyAmount

    result[ id ] = { 
      codeChar,
      name,
      amount: currencyAmount
    }
  }

  return result
}

const mapStateToProps = state => {
  return {
    selectedCurrencies: getSelectedCurrencies(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConverterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter)

export default ConverterContainer