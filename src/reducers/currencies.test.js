import actionTypes from '../actions/actionTypes'
import currencies from './currencies'

describe('Reducers: currencies', () => {
  it('MUST BE a function', () => {
    expect(currencies).toBeInstanceOf(Function);
  })

  it('MUST return state for unknown action', () => {
    expect(
      currencies(
        {isFetching: false},
        {type: 'unknown'}
      )
    )
    .toEqual({isFetching: false})
  })

  it('MUST save currencies and update state on receive', () => {
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

  it('MUST set state to "fetching" status on request', () => {
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
})