import api from './api';

describe('API', () => {
  it('MUST export an oject', () => {
    expect(api).toBeInstanceOf(Object)
  })

  describe('method fetchCurrencyList()', () => {
    it('MUST be defined as a function', () => {
      expect(api.fetchCurrenciesRates).toBeInstanceOf(Function)
    })

  })
})