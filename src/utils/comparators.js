/**
 * Compares two objects by a propperty
 * 
 * @param {String} propName 
 * @param {String} order Can be 'asc' or 'dsc' 
 */

export const compareByProp = (order, propName) => {
  switch (order) {
    case 'asc':
      return (obj1, obj2) => {
        if (obj1[propName] < obj2[propName]) return -1
        if (obj1[propName] > obj2[propName]) return 1
        return 0
      }
    case 'dsc':
      return (obj1, obj2) => {
        if (obj1[propName] > obj2[propName]) return -1
        if (obj1[propName] < obj2[propName]) return 1
        return 0
      }
    default:
      throw new Error('Comparator: compareByProps() sorting order is not supported')
  }
}

export const compareByPropAsc = compareByProp.bind(null, 'asc')