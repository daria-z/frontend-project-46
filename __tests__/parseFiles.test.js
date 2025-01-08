import path from 'path';
import fileReader from '../src/fileReader.js';

const getFixturesPath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
const json1 = getFixturesPath('file1.json');
const json2 = getFixturesPath('file2.json');
const yaml1 = getFixturesPath('file1.yaml');
const yaml2 = getFixturesPath('file2.yaml');

test('extention problems', () => {
  expect(fileReader(json1, yaml1)).toEqual([null, null]);
});

test('correct extention', () => {
  const [, , extJson] = fileReader(json1, json2);
  const [, , extYaml] = fileReader(yaml1, yaml2);

  expect(extJson).toBe('json');
  expect(extYaml).toBe('yaml');
});
