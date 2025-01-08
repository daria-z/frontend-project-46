import fs from 'fs';
import path from 'path';
import gendiff from '../src/genDiff.js';
import transformToString from '../src/transformToString.js';

const getFixturesPath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
const expected = fs.readFileSync(getFixturesPath('expected_stylish.txt'), 'utf-8');

test('check final result', () => {
  const json1 = getFixturesPath('file1.json');
  const json2 = getFixturesPath('file2.json');

  const result = transformToString(gendiff(json1, json2));
  // if (result !== expected.trim()) {
  //   console.log(diff(expected.trim(), result));
  // }
  expect(result).toEqual(expected);
  // console.log(gendiff(json1, json2));
});
