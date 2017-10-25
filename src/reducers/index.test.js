import index from './index';

describe('Reducers', () => {
  it('root reducer MUST BE a function', () => {
    expect(index).toBeInstanceOf(Function);
  });
});