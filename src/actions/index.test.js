import actionTypes from './actionTypes'
import {
  currenciesFetchFail,
  currenciesReceive,
  currenciesRequest,
  errorsResetMessage,
  uiSelectTab
} from './index.js'

describe('Actions MUST create actions properly', ()=> {
  it('currenciesFetchFail()', () => {
    expect( currenciesFetchFail(new Error('Error text')) )
    .toMatchObject({
      type: actionTypes.CURRENCIES_FETCH_FAIL,
      payload: expect.any(Object),
      error: true
    })
  })

  it('currenciesReceive()', () => {
    const action = currenciesReceive({'1': {}})
    
    expect( action )
    .toMatchObject({
      type: actionTypes.CURRENCIES_RECEIVE,
      payload: {
        currencies: expect.any(Object),
        lastUpdated: expect.any(Number)
      }
    })

    expect( action.payload.lastUpdated ).not.toBe(0)
  })

  it('currenciesRequest()', () => {
    expect( currenciesRequest() )
    .toEqual({
      type: actionTypes.CURRENCIES_REQUEST
    })
  })

  it('errorsResetMessage()', () => {
    expect( errorsResetMessage() )
    .toEqual({
      type: actionTypes.ERRORS_RESET_MESSAGE
    })
  })

  it('uiSelectTab()', () => {
    expect( uiSelectTab('rates') )
    .toEqual({
      type: actionTypes.UI_SELECT_TAB,
      payload: 'rates'
    })
  })
})