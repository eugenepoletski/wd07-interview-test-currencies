import { connect } from 'react-redux'
import { compareByPropAsc } from '../../../../utils/comparators'
import { converterAddCurrency } from '../../../../actions'
import AddCurrency from './AddCurrency'

const getAvailableCurrencies = state => {
  const currencies = state.currencies.byIds,
    baseCurrencyId = state.converter.baseCurrencyId,
    selectedIds = state.converter.selectedByIds,
    availableCurrencies = []
  
  for (let currencyId in currencies) {
    if (selectedIds.indexOf( currencyId ) < 0) {
      if (currencyId !== baseCurrencyId) {
        const currency = currencies[ currencyId ]
        currency.id = currencyId
        availableCurrencies.push(currency)
      }
    }
  }

  availableCurrencies.sort( compareByPropAsc('charCode') )

  return availableCurrencies
}

const mapStateToProps = state => {
  return {
    currencies: getAvailableCurrencies(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCurrency: currencyId => dispatch( converterAddCurrency(currencyId) )
  }
}

const AddCurrencyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCurrency)

export default AddCurrencyContainer