import { connect } from 'react-redux'
import {
  currenciesFetch,
  uiSelectTab
} from '../../actions/index'
import Currencies from './Currencies'

const mapStateToProps = state => {
  return {
    isFetching: state.currencies.isFetching,
    currencies: state.currencies.byIds,
    lastUpdated: state.currencies.lastUpdated,
    selectedTabId: state.ui.selectedTabId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrenciesIfNeeded: () => dispatch( currenciesFetch() ),
    handleTabClick: tabId => dispatch( uiSelectTab(tabId) )
  }
}

const CurrenciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies)

export default CurrenciesContainer