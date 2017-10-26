import { connect } from 'react-redux'
import { currenciesFetch } from '../../actions/index'
import Currencies from './Currencies'

const mapStateToProps = state => {
  return {
    currencies: state.currencies.byIds,
    lastUpdated: state.currencies.lastUpdated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrenciesIfNeeded: () => dispatch( currenciesFetch() )
  }
}

const CurrenciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies)

export default CurrenciesContainer