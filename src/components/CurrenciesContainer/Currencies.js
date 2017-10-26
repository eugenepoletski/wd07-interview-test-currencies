import React, { Component } from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  currencies: {},
  selectedTabId: 'rates'
}

const propTypes = {
  currencies: PropTypes.objectOf(
    PropTypes.shape({
      charCode: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nominal: PropTypes.string.isRequired,
      numCode: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  currenciesFetch: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired
}

class Currencies extends Component {
  componentDidMount() {
    this.props.currenciesFetch()
  }

  render() {
    const props = this.props,
      selectedTabId = props.selectedTabId
    
    return (
      <div>Currencies</div>
    )
  }
}

Currencies.defaultProps = defaultProps
Currencies.propTypes = propTypes

export default Currencies