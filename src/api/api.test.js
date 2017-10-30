import api from './api';

describe('API', () => {
  it('Should export an oject', () => {
    expect(api).toBeInstanceOf(Object)
  })

  describe('method fetchCurrencies()', () => {
    it('Should be defined as a function', () => {
      expect(api.fetchCurrencies).toBeInstanceOf(Function)
    })

  })
})