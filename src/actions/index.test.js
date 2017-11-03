import actionTypes from './actionTypes'
import {
  converterAddCurrency,
  converterRemoveCurrency,
  converterSelectBase,
  converterSetBaseAmount,
  currenciesFetchFail,
  currenciesReceive,
  currenciesRequest,
  currenciesResetUpdate,
  currenciesScheduleUpdate,
  errorsResetMessage,
  uiSelectTab
} from './index.js'

describe('Actions Should create actions properly', ()=> {
  it('converterAddBase()', () => {
    expect( converterAddCurrency('USD') )
    .toEqual({
      type: 'CONVERTER_ADD_CURRENCY',
      payload: 'USD'
    })
  })

  it('converterRemoveBase()', () => {
    expect( converterRemoveCurrency('USD') )
    .toEqual({
      type: 'CONVERTER_REMOVE_CURRENCY',
      payload: 'USD'
    })
  })

  it('converterSelectBase()', () => {
    expect( converterSelectBase('USD') )
    .toEqual({
      type: 'CONVERTER_SELECT_BASE',
      payload: 'USD'
    })
  })

  it('converterSetBaseAmount()', () => {
    expect( converterSetBaseAmount(100) )
    .toEqual({
      type: 'CONVERTER_SET_BASE_AMOUNT',
      payload: 100
    })
  })

  it('currenciesFetchFail()', () => {
    expect( currenciesFetchFail(new Error('Error text')) )
    .toMatchObject({
      type: 'CURRENCIES_FETCH_FAIL',
      payload: expect.any(Object),
      error: true
    })
  })

  it('currenciesReceive()', () => {
    const action = currenciesReceive({'1': {}})
    
    expect( action )
    .toMatchObject({
      type: 'CURRENCIES_RECEIVE',
      payload: {
        currencies: expect.any(Object),
        lastUpdated: expect.any(String)
      }
    })

    expect( action.payload.lastUpdated ).not.toBe(0)
  })

  it('currenciesRequest()', () => {
    expect( currenciesRequest() )
    .toEqual({
      type: 'CURRENCIES_REQUEST'
    })
  })

  it('currenciesResetUpdate()', () => {
    expect( currenciesResetUpdate() )
    .toEqual({
      type: 'CURRENCIES_RESET_UPDATE'
    })
  })

  it('currenciesScheduleUpdate()', () => {
    const timer = setTimeout(() => {}, 1000)
    expect( currenciesScheduleUpdate( timer ) )
    .toEqual({
      type: 'CURRENCIES_SCHEDULE_UPDATE',
      payload: timer
    })
  })

  it('errorsResetMessage()', () => {
    expect( errorsResetMessage() )
    .toEqual({
      type: 'ERRORS_RESET_MESSAGE'
    })
  })

  it('uiSelectTab()', () => {
    expect( uiSelectTab('rates') )
    .toEqual({
      type: 'UI_SELECT_TAB',
      payload: 'rates'
    })
  })
})