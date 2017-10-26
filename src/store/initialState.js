// Setup initial state
const initialState = {
  currencies: {
    isFetching: false,
    lastUpdated: 0,
    updateInterval: 60000,
    byIds: {}
  },
  converter: {
    baseCurrencyId: '',
    amount: 0, 
    selectedByIds: {}
  },
  ui: {
    selectedTabId: ''
  }
}

export default initialState;