import { keys, union } from 'lodash-es';

const findDiff = (obj1, obj2) => {
  const result = {};
  const keysArray = union(keys(obj1), keys(obj2)).sort();

  keysArray.forEach((key) => {
    const oldList = keys(obj1).includes(key);
    const newList = keys(obj2).includes(key);

    if (oldList && newList) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        result[key] = findDiff(obj1[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        result[key] = { status: 'unchanged', value: obj1[key] };
      } else {
        result[key] = { status: 'changed', oldValue: obj1[key], newValue: obj2[key] };
      }
    } else if (oldList) {
      result[key] = { status: 'deleted', value: obj1[key] };
    } else if (newList) {
      result[key] = { status: 'added', value: obj2[key] };
    }
  });

  return result;
};

export default findDiff;
