const typeNames = [
  'CURRENCIES_FETCH_FAIL',
  'CURRENCIES_RECEIVE',
  'CURRENCIES_REQUEST',
  'ERROR_RESET_MESSAGE',
  'UI_SELECT_TAB'
]

const actionTypes = {}

typeNames.forEach(typeName => {
  actionTypes[ typeName ] = typeName
})

export default actionTypes;