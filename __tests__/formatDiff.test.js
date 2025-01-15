import fs from 'fs';
import path from 'path';
import formatDiff from '../src/formatDiff.js';

const getFixturesPath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
const expectedStylish = fs.readFileSync(getFixturesPath('expected_stylish.txt'), 'utf-8');
const expectedPlain = fs.readFileSync(getFixturesPath('expected_plain.txt'), 'utf-8');
const expectedJson = fs.readFileSync(getFixturesPath('expected_json.json'), 'utf-8');

const json1 = getFixturesPath('file1.json');
const json2 = getFixturesPath('file2.json');

test('gendiff stylish format', () => {
  const result = formatDiff(json1, json2);
  expect(result).toEqual(expectedStylish.trim());
});

test('gendiff plain format', () => {
  const result = formatDiff(json1, json2, 'plain');
  expect(result).toEqual(expectedPlain.trim());
});

test('gendiff json format', () => {
  const result = formatDiff(json1, json2, 'json');
  expect(result).toEqual(expectedJson.trim());
});
