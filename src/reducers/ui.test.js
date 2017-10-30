import actionTypes from '../actions/actionTypes'
import ui from './ui'

describe('Reducers: ui', () => {
  it('Should BE a function', () => {
    expect(ui).toBeInstanceOf(Function);
  })

  it('Should return state for unknown action', () => {
    expect(
      ui(
        {selectedTabId: ''},
        {type: 'unknown'}
      )
    )
    .toEqual({selectedTabId: ''})
  })

  it('Should change selected tab', () => {
    expect(
      ui(
        {selectedTabId: ''},
        {
          type: actionTypes.UI_SELECT_TAB,
          payload: 'list'
        }
      )
    )
    .toEqual({selectedTabId: 'list'})
  })
})