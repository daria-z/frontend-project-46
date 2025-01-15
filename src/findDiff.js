import {
  isPlainObject, keys, union, sortBy,
} from 'lodash-es';

const findDiff = (obj1, obj2) => {
  const keysArray = sortBy(union(keys(obj1), keys(obj2)));

  return keysArray.reduce((result, key) => {
    const isDeleted = keys(obj1).includes(key);
    const isAdded = keys(obj2).includes(key);

    if (isAdded && !isDeleted) {
      return {
        ...result,
        [key]: { status: 'added', value: obj2[key] },
      };
    }

    if (isDeleted && !isAdded) {
      return {
        ...result,
        [key]: { status: 'deleted', value: obj1[key] },
      };
    }

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
  }, {});
};

export default findDiff;
