import actionTypes from './actionTypes';

export const testAction = () => {
  return {
    type: actionTypes.TEST_ACTION,
    payload: 'test action'
  }
}