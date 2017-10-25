import actionTypes from './actionTypes';

describe('Action types MUST BE defined and have corresponding value of type {string}', () => {
  it('TEST_ACTION', () => {
    expect( actionTypes.TEST_ACTION ).toBe('TEST_ACTION');
  });
});