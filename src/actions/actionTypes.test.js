import actionTypes from './actionTypes'

describe('Action types MUST BE defined and have corresponding value of type {string}', () => {
  it('CURRENCIES_FETCH_FAIL', () => {
    expect( actionTypes.CURRENCIES_FETCH_FAIL ).toBe('CURRENCIES_FETCH_FAIL')
  })

  it('CURRENCIES_RECEIVE', () => {
    expect( actionTypes.CURRENCIES_RECEIVE ).toBe('CURRENCIES_RECEIVE')
  })

  it('CURRENCIES_REQUEST', () => {
    expect( actionTypes.CURRENCIES_REQUEST ).toBe('CURRENCIES_REQUEST')
  })

  it('ERRORS_RESET_MESSAGE', () => {
    expect( actionTypes.ERRORS_RESET_MESSAGE ).toBe('ERRORS_RESET_MESSAGE')
  })

  it('UI_SELECT_TAB', () => {
    expect( actionTypes.UI_SELECT_TAB ).toBe('UI_SELECT_TAB')
  })
})