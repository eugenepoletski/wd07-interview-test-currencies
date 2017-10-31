import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Converter from './Converter/Converter'
import Rates from './Rates/Rates'
import TabsControl from './TabsControl/TabsControl'

const defaultProps = {
  currencies: {},
  lastUpdated: 0,
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
  lastUpdated: PropTypes.number.isRequired,
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

    if (isFetching && lastUpdated === 0) {
      return (
        <div>Loading currencies...</div>
      )
    }

    const tabs = ['rates', 'converter']

    const TabComponent = () => {
      switch (selectedTabId) {
        case 'converter':
          return (
            <Converter />
          )
        case 'rates':
          return (
            <Rates currencies={currencies} />
          )
        default:
          return (
            <Rates currencies={currencies} />
          )
      }
    } 

    return (
      <div>
        <TabsControl tabs={tabs} handleTabClick={handleTabClick} />
        <TabComponent />
      </div>
    )
  }
}

Currencies.defaultProps = defaultProps
Currencies.propTypes = propTypes

export default Currencies