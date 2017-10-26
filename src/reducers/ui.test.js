import actionTypes from '../actions/actionTypes'
import ui from './ui'

describe('Reducers: ui', () => {
  it('MUST BE a function', () => {
    expect(ui).toBeInstanceOf(Function);
  })

  it('MUST return state for unknown action', () => {
    expect(
      ui(
        {selectedTabId: ''},
        {type: 'unknown'}
      )
    )
    .toEqual({selectedTabId: ''})
  })

  it('MUST change selected tab', () => {
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