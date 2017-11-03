const typeNames = [
  'CONVERTER_ADD_CURRENCY',
  'CONVERTER_REMOVE_CURRENCY',
  'CONVERTER_SELECT_BASE',
  'CONVERTER_SET_BASE_AMOUNT',
  'CURRENCIES_FETCH_FAIL',
  'CURRENCIES_RECEIVE',
  'CURRENCIES_REQUEST',
  'CURRENCIES_RESET_UPDATE',
  'CURRENCIES_SCHEDULE_UPDATE',
  'ERRORS_RESET_MESSAGE',
  'UI_SELECT_TAB'
]

const actionTypes = {}

typeNames.forEach(typeName => {
  actionTypes[ typeName ] = typeName
})

export default actionTypes;