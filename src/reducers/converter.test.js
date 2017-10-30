import actionTypes from '../actions/actionTypes'
import converter from './converter'

describe('Reducers: converter', () => {
  it('Should BE a function', () => {
    expect(converter).toBeInstanceOf(Function);
  })

  it('Should return state for unknown action', () => {
    expect(
      converter(
        {baseCurrencyId: 'USD'},
        {type: 'unknown'}
      )
    )
    .toEqual({baseCurrencyId: 'USD'})
  })

  it('Should set base currency', () => {
    expect(
      converter({
        baseCurrencyId: 'R0',
        amount: 1, 
        selectedByIds: []
      },{
        type: actionTypes.CONVERTER_SELECT_BASE,
        payload: 'USD'
      })
    )
    .toEqual({
      baseCurrencyId: 'USD',
      amount: 1, 
      selectedByIds: []
    })
  })

  it('Should add currency to list', () => {
    expect(
      converter({
        baseCurrencyId: 'R0',
        amount: 1, 
        selectedByIds: ['AUD', 'USD']
      },{
        type: actionTypes.CONVERTER_ADD_CURRENCY,
        payload: 'NZD'
      })
    )
    .toEqual({
      baseCurrencyId: 'R0',
      amount: 1, 
      selectedByIds: ['AUD', 'USD', 'NZD']
    })
  })

  it('Should remove currency from list', () => {
    expect(
      converter({
        baseCurrencyId: 'R0',
        amount: 1, 
        selectedByIds: ['AUD', 'USD', 'NZD']
      },{
        type: actionTypes.CONVERTER_REMOVE_CURRENCY,
        payload: 'USD'
      })
    )
    .toEqual({
      baseCurrencyId: 'R0',
      amount: 1, 
      selectedByIds: ['AUD', 'NZD']
    })
  })

  it('Should set base currency amount', () => {
    expect(
      converter({
        baseCurrencyId: 'R0',
        amount: 1, 
        selectedByIds: ['USD', 'NZD']
      },{
        type: actionTypes.CONVERTER_SET_BASE_AMOUNT,
        payload: 100
      })
    )
    .toEqual({
      baseCurrencyId: 'R0',
      amount: 100, 
      selectedByIds: ['USD', 'NZD']
    })
  })

})