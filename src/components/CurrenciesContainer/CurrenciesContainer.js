import { connect } from 'react-redux'
import {
  currenciesFetch,
  uiSelectTab
} from '../../actions/index'
import Currencies from './Currencies'

const mapStateToProps = state => {
  return {
    currencies: state.currencies.byIds,
    isFetching: state.currencies.isFetching,
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