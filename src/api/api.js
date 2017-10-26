import 'whatwg-fetch'
import {mapCurrenciesRates} from './mappers'

const api = {}

/**
 * Fetch currencies rates
 * 
 * @return {Object} Mapped currencies rates
 */
const fetchCurrencies = () => {
  return _fetchCurrencies('/api/currencies')
  .then( currenciesData => {
    // Throw exception when data was not provided
    if (!currenciesData) {
      throw new Error('No currencies data provided from server')
    }
    return mapCurrenciesRates( currenciesData )
  })
}

/**
 * Fetch currencies data from service provider
 * 
 * @param {String} url our server api url
 * @return {String} Currencies data
 */
const _fetchCurrencies = url => {
  return fetch(url)
    .then(
      res => {
        if (res.status !== 200) {
          throw new Error('Error fetching currencies from: ' + url)
        }
        // Convert ReadableStream to text and return
        return res.text()
      }
    )
}

api.fetchCurrencies = fetchCurrencies;

export default api;