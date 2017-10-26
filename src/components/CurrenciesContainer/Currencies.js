import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      valueNum: PropTypes.number.isRequired
    })
  ).isRequired,
  fetchCurrenciesIfNeeded: PropTypes.func.isRequired,
  lastUpdated: PropTypes.number.isRequired,
  selectedTabId: PropTypes.string.isRequired
}

class Currencies extends Component {
  componentDidMount() {
    this.props.fetchCurrenciesIfNeeded()
  }

  render() {
    const props = this.props,
      selectedTabId = props.selectedTabId
      
    let currencies = []

    for (let currencyId in props.currencies) {
      currencies.push({
        id: currencyId,
        attributes: props.currencies[ currencyId ]
      })
    }

    currencies.sort( (a, b) => {
      return a.attributes.charCode > b.attributes.charCode ? 1 : -1
    })

    currencies = currencies.map( currency => {
      const attributes = currency.attributes
      return (
        <tr key={currency.id}>
          <td>{attributes.charCode}</td>
          <td>{attributes.name}</td>
          <td>{attributes.nominal}</td>
          <td>{attributes.valueChar}</td>
        </tr>
      )
    })

    return (
      <div>
        <div>Currencies</div>
        <table>
          <tbody>
            {currencies}
          </tbody>
        </table>
      </div>
    )
  }
}

Currencies.defaultProps = defaultProps
Currencies.propTypes = propTypes

export default Currencies