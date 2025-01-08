import { isPlainObject, keys, union } from 'lodash-es';

const findDiff = (obj1, obj2) => {
  const keysArray = union(keys(obj1), keys(obj2)).sort();

  return keysArray.reduce((result, key) => {
    const isDeleted = keys(obj1).includes(key);
    const isAdded = keys(obj2).includes(key);

    if (isAdded && isDeleted) {
      if (isPlainObject(obj1[key]) && isPlainObject(obj2[key])) {
        return {
          ...result,
          [key]: { status: 'object', value: findDiff(obj1[key], obj2[key]) },

        };
      }

      if (obj1[key] === obj2[key]) {
        return {
          ...result,
          [key]: { status: 'unchanged', value: obj1[key] },
        };
      }

      if (obj1[key] !== obj2[key]) {
        return {
          ...result,
          [key]: { status: 'changed', oldValue: obj1[key], newValue: obj2[key] },
        };
      }
      return result;
    }

    if (isAdded) {
      return {
        ...result,
        [key]: { status: 'added', value: obj2[key] },
      };
    }

    if (isDeleted) {
      return {
        ...result,
        [key]: { status: 'deleted', value: obj1[key] },
      };
    }
    return result;
  }, {});
};

export default findDiff;
