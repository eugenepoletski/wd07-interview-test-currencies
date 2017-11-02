import { compareByPropAsc } from './comparators'

/**
 * Map currencies from object to array and sort ascending
 * @param {Object} currenciesByIds Object with currencies stored by ids
 * @param {String} propName Property name for sorting
 */
export const mapCurrenciesToArrayAsc = (currenciesByIds, propName) => {
  const currencies = []

  for (let currencyId in currenciesByIds) {
    currencies.push(
      Object.assign({},
        currenciesByIds[ currencyId ], // Add original currency object
        {id: currencyId} // Add currency id
      )
    )
  }

  return currencies.sort( compareByPropAsc(propName) )
}