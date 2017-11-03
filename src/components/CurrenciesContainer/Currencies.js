import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading/Loading'
import Converter from './Converter/Converter'
import CurrenciesUpdate from './CurrenciesUpdate/CurrenciesUpdate'
import Rates from './Rates/Rates'
import TabsControl from './TabsControl/TabsControl'

const defaultProps = {
  currencies: {},
  lastUpdated: '',
  selectedTabId: 'rates'
}

const propTypes = {
  currencies: PropTypes.objectOf(
    PropTypes.shape({
      charCode: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nominal: PropTypes.string.isRequired,
      numCode: PropTypes.string.isRequired,
      valueChar: PropTypes.string.isRequired,
      valueNum: PropTypes.number.isRequired
    })
  ).isRequired,
  fetchCurrenciesIfNeeded: PropTypes.func.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  selectedTabId: PropTypes.string.isRequired
}

class Currencies extends Component {
  componentDidMount() {
    this.props.fetchCurrenciesIfNeeded()
  }

  render() {
    const {
      currencies,
      isFetching,
      handleTabClick,
      lastUpdated,
      selectedTabId
    } = this.props

    if (isFetching && lastUpdated === '') {
      return (
        <Loading />
      )
    }
    
    const tabs = ['rates', 'converter']

    let tabComponent = null

    switch (selectedTabId) {
      case 'converter':
        tabComponent = <Converter />
        break
      case 'rates':
        tabComponent = <Rates currencies={currencies} />
        break
      default:
        tabComponent = <Rates currencies={currencies} />
    }

    return (
      <div>
        <TabsControl
          tabs={tabs}
          handleTabClick={handleTabClick}
          selectedTabId={selectedTabId}/>
        <CurrenciesUpdate
          isFetching={isFetching}
          lastUpdated={lastUpdated}/>
        {tabComponent}
      </div>
    )
  }
}

Currencies.defaultProps = defaultProps
Currencies.propTypes = propTypes

export default Currencies