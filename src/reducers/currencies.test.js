import actionTypes from '../actions/actionTypes'
import currencies from './currencies'

describe('Reducers: currencies', () => {
  it('Should BE a function', () => {
    expect(currencies).toBeInstanceOf(Function);
  })

  it('Should return state for unknown action', () => {
    expect(
      currencies(
        {isFetching: false},
        {type: 'unknown'}
      )
    )
    .toEqual({isFetching: false})
  })

  it('Should set state to "fetching" status on request', () => {
    expect(
      currencies(
        {
          isFetching: false,
          lastUpdated: 0
        },
        {
          type: actionTypes.CURRENCIES_REQUEST
        }
      )
    )
    .toEqual({
      isFetching: true,
      lastUpdated: 0
    })
  })

  it('Should save currencies and update state on request success', () => {
    const lastUpdated = Date.now()

    expect(
      currencies(
        {
          isFetching: true,
          lastUpdated: 0,
          byIds: {}
        },
        {
          type: actionTypes.CURRENCIES_RECEIVE,
          payload: { 
            currencies: {'1': 'currency'},
            lastUpdated
          }
        }
      )
    )
    .toEqual({
      isFetching: false,
      lastUpdated,
      byIds: {
        '1': 'currency'
      }
    })
  })

  it('Should end "fetching" state and inform about errors on request failure', () => {
    expect(
      currencies(
        {
          isFetching: true,
          lastUpdated: 16384
        },
        {
          type: actionTypes.CURRENCIES_FETCH_FAIL,
          payload: new Error('Error'),
          error: true
        }
      )
    )
    .toEqual({
      isFetching: false,
      lastUpdated: 16384
    })
  })

})