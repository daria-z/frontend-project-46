import { keys, union } from 'lodash-es';
import fs from 'fs';

const findDiff = (obj1, obj2) => {
  const resultData = [];
  const keysArray = union(keys(obj1), keys(obj2)).sort();

  const formString = (sym, key, value) => [`  ${sym} ${key}: ${value}`];
  const resultToString = (array) => `\n{\n${array.join('\n')}\n}\n`;

  keysArray.forEach((key) => {
    if (keys(obj1).includes(key) && keys(obj2).includes(key)) {
      const checkedStrings = obj1[key] === obj2[key] ? formString(' ', [key], obj1[key]) : (formString('-', [key], obj1[key]), formString('+', [key], obj2[key]));
      resultData.push(checkedStrings);
    }
    if (keys(obj1).includes(key) && !keys(obj2).includes(key)) {
      resultData.push(formString('-', [key], obj1[key]));
    }
    if (!keys(obj1).includes(key) && keys(obj2).includes(key)) {
      resultData.push(formString('+', [key], obj2[key]));
    }
  });

  return resultToString(resultData);
};

export default (path1, path2) => {
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');

  if (path1.split('.').reverse()[0] === 'json') {
    return findDiff(JSON.parse(file1), JSON.parse(file2));
  }
  return '';
};
