import actionTypes from './actionTypes';
import {
  testAction
} from './index.js';

describe('Actions', ()=> {
  it('testAction() MUST create test action', () => {
    expect( testAction() )
    .toEqual({
      type: actionTypes.TEST_ACTION,
      payload: 'test action'
    });
  });
});