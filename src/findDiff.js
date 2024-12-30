import { keys, union } from 'lodash-es';
import fs from 'fs';
const file1 = fs.readFileSync('./data/file1.json', 'utf-8');
const file2 = fs.readFileSync('./data/file2.json', 'utf-8');

const diff = (obj1, obj2) => {
  const resultData = [];
  const keysArray = union(keys(obj1), keys(obj2)).sort();

  keysArray.forEach(key => {
    if (keys(obj1).includes(key) && keys(obj2).includes(key)) {
      obj1[key] === obj2[key] ? resultData.push([' ', { [key]: obj1[key] }]) : resultData.push(['-', { [key]: obj1[key] }], ['+', { [key]: obj2[key] }]);
    }
    if (keys(obj1).includes(key) && !keys(obj2).includes(key)) {
      resultData.push(['-', { [key]: obj1[key]}]);
    }
    if (!keys(obj1).includes(key) && keys(obj2).includes(key)) {
      resultData.push(['+', { [key]: obj2[key]}]);
    }
  });

  return resultData;
};

// console.log(diff(JSON.parse(file1), JSON.parse(file2)));
