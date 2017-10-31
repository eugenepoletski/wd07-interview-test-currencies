/**
 * Compares two objects by a propperty
 * 
 * @param {String} propName 
 * @param {String} order Can be 'asc' or 'dsc' 
 */
export const compareByProp = (order, propName) => {
  return (obj1, obj2) => {
    return (order === 'dsc' ? obj1[propName] < obj2[propName] : obj1[propName] > obj2[propName])
  }
}

export const compareByPropAsc = compareByProp.bind(null, 'asc')