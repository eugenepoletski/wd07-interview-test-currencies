const typeNames = [
  'CURRENCIES_RECEIVE',
  'CURRENCIES_REQUEST',
  'UI_SELECT_TAB'
];

const actionTypes = {};

typeNames.forEach(typeName => {
  actionTypes[ typeName ] = typeName;
});

export default actionTypes;