import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compareByPropAsc } from '../../../../utils/comparators'
import styles from './AddCurrency.scss'

const defaultProps = {
  currencies: []
}

const propTypes = {
  currencies: PropTypes.array.isRequired
}

class AddCurrency extends Component {
  constructor(props) {
    super(props)
    this.state = { selectValue: this._DEFAULT_ }
  }

  handleAddClick() {
    if (this.state.selectValue === this._DEFAULT_) return
    this.setState({ selectValue: this._DEFAULT_ })
    this.props.handleAddCurrency(this.state.selectValue)
  }
  
  handleSelect(evt) {
    this.setState({ selectValue: evt.target.value })
  }

  get _DEFAULT_() {
    return '__default__'
  }

  render() {
    const props = this.props

    const options = props.currencies
      .sort( compareByPropAsc('charCode') )
      .map( currency => {
      return (
        <option
          key={currency.id}
          value={currency.id}>
          {currency.charCode}&nbsp;&nbsp;&nbsp;{currency.name}
        </option>
      )
    })

    options.unshift(
      <option
        className={styles.option}
        key={this._DEFAULT_}
        value={this._DEFAULT_}>
        --- select currency to add ---
        </option>)
  
    return (
      <div>
        <select
          className={styles.select}
          onChange={(evt) => this.handleSelect(evt)}>
          {options}
        </select>
        <span onClick={() => this.handleAddClick()}>&#10133;</span>
      </div>
    )
  }
}

AddCurrency.defaultProps = defaultProps
AddCurrency.propTypes = propTypes

export default AddCurrency