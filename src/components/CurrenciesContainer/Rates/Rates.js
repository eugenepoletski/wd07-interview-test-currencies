import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {}

const propTypes = {}

const Rates = props => {
//   const props = this.props,
//   selectedTabId = props.selectedTabId
  
// let currencies = []

// for (let currencyId in props.currencies) {
//   currencies.push({
//     id: currencyId,
//     attributes: props.currencies[ currencyId ]
//   })
// }

// // Sort currencies by {String} charCode
// currencies.sort( (a, b) => {
//   return a.attributes.charCode > b.attributes.charCode ? 1 : -1
// })

// currencies = currencies.map( currency => {
//   const attributes = currency.attributes
//   return (
//     <tr key={currency.id}>
//       <td>{attributes.charCode}</td>
//       <td>{attributes.name}</td>
//       <td>{attributes.nominal}</td>
//       <td>{attributes.valueChar}</td>
//     </tr>
//   )
// })
{/* <table>
<tbody>
  {currencies}
</tbody>
</table> */}
  return (
    <div>
      Rates
    </div>
  )
}

Rates.defaultProps = defaultProps
Rates.propTypes = propTypes

export default Rates