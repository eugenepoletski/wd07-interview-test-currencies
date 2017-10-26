import api from './api';

describe('API', () => {
  it('MUST export an oject', () => {
    expect(api).toBeInstanceOf(Object)
  })

  describe('method fetchCurrencies()', () => {
    it('MUST be defined as a function', () => {
      expect(api.fetchCurrencies).toBeInstanceOf(Function)
    })

  })
})