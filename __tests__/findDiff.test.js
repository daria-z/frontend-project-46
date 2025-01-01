import fs from 'fs';
import findDiff from '../src/findDiff.js';

const path1 = './__fixtures__/file1.json';
const path2 = './__fixtures__/file2.json';
const result = fs.readFileSync('./__fixtures__/result.txt').toString();

test('is string', () => {
  const diffResult = findDiff(path1, path2);
  expect(typeof diffResult).toBe('string');
});

test('same result', () => {
  const diffResult = findDiff(path1, path2);
  expect(diffResult).toEqual(result);
});
