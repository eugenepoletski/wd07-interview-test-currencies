// Setup initial state
const initialState = {
  currencies: {
    isFetching: false,
    lastUpdated: 0,
    updateInterval: 60000,
    byIds: {
      R0: {
        charCode: 'RUB',
        name: 'Russian Rouble',
        nominal: '1',
        numCode: '1',
        valueNum: 1.0000,
        valueChar: '1,0000'
      }
    }
  },
  converter: {
    baseCurrencyId: 'R0',
    amount: 1, 
    selectedByIds: {}
  },
  errors: {
    message: '',
    error: false
  },
  ui: {
    selectedTabId: ''
  }
}

export default initialState;