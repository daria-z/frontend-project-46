import { keys, union } from 'lodash-es';

export default (obj1, obj2) => {
  const resultData = [];
  const keysArray = union(keys(obj1), keys(obj2)).sort();

  // const formString = (sym, key, value) => [`  ${sym} ${key}: ${value}`];
  // const resultToString = (array) => `\n{\n${array.join('\n')}\n}\n`.toString();

  keysArray.forEach((key) => {
    if (keys(obj1).includes(key) && keys(obj2).includes(key)) {
      if (obj1[key] === obj2[key]) {
        resultData.push([' ', key, obj1[key]]);
      } else {
        resultData.push(['-', key, obj1[key]]);
        resultData.push(['+', key, obj2[key]]);
      }
    }
    if (keys(obj1).includes(key) && !keys(obj2).includes(key)) {
      resultData.push(['-', key, obj1[key]]);
    }
    if (!keys(obj1).includes(key) && keys(obj2).includes(key)) {
      resultData.push(['+', key, obj2[key]]);
    }
  });
  return resultData;
};
