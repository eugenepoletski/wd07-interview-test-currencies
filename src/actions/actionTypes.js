const typeNames = [
  'TEST_ACTION'
];

const actionTypes = {};

typeNames.forEach(typeName => {
  actionTypes[ typeName ] = typeName;
});

export default actionTypes;