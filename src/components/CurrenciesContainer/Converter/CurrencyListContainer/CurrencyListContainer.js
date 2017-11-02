import { connect } from 'react-redux'
import { compareByPropAsc } from '../../../../utils/comparators'
import { converterRemoveCurrency } from '../../../../actions'
import CurrencyList from './CurrencyList'

const getSelectedCurrencies = state => {
  const baseCurrencyAmount = state.converter.amount,
    baseCurrencyId = state.converter.baseCurrencyId,
    currencies = state.currencies.byIds,
    selectIds = state.converter.selectedByIds;

  const baseCurrency = currencies[ baseCurrencyId ],
    baseCurrencyRate = baseCurrency.valueNum,
    baseCurrencyNominal = Number(baseCurrency.nominal)

  const selectCurrencies = selectIds
    // exclude base currency id from the list
    .filter( currenciId => currenciId !== baseCurrencyId )
    // create corresponding currencies list
    .map( currencyId => {
      const {
        charCode,
        name,
        nominal,
        valueNum
      } = currencies[ currencyId ]

      const currencyAmount = baseCurrencyRate / baseCurrencyNominal * Number( nominal ) / valueNum * baseCurrencyAmount

      return {
        id: currencyId,
        charCode,
        name, 
        amount: currencyAmount
      }
    }
  )

  selectCurrencies.sort(compareByPropAsc('charCode'))

  return selectCurrencies
}

const mapStateToProps = state => {
  return {
    currencies: getSelectedCurrencies(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRemoveCurrency: currencyId => dispatch( converterRemoveCurrency(currencyId) )
  }
}

const CurrencyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyList)

export default CurrencyListContainer