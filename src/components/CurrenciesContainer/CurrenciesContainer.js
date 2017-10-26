import { connect } from 'react-redux'
import { currenciesFetch } from '../../actions/index'
import Currencies from './Currencies'

const mapStateToProps = state => {
  return {
    currencies: state.currencies.byIds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    currenciesFetch: () => dispatch( currenciesFetch() )
  }
}

const CurrenciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies)

export default CurrenciesContainer