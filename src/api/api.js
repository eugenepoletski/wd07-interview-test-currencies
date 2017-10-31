import 'whatwg-fetch'
import {mapCurrenciesData} from './mappers'

import { currenciesMock } from './currencies.mock'

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
      throw new Error('Empty currencies data received')
    }
    try {
      return mapCurrenciesData( currenciesData )
    }
    catch(err) {
      throw new Error('Error mapping received currencies data: ' + err)
    }
  })
}

/**
 * Fetch currencies data from service provider
 * 
 * @param {String} url our server api url (for proxying requests)
 * @return {String} Currencies data in text format
 */
const _fetchCurrencies = url => {
  return _mockFetchCurrencies()

  return fetch(url)
    .then(
      res => {
        if (res.status !== 200) {
          throw new Error('Network error fetching currencies from: ' + url)
        }
        // Convert ReadableStream to text and return
        return res.text()
      }
    )
}

const _mockFetchCurrencies = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( currenciesMock )
    }, 1000)
  })
}

api.fetchCurrencies = fetchCurrencies

export default api