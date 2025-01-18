import path from 'path';
import fileReader from '../src/fileReader.js';

const getFixturesPath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
const json1 = getFixturesPath('file1.json');
const json2 = getFixturesPath('file2.json');
const yaml1 = getFixturesPath('file1.yaml');
const yaml2 = getFixturesPath('file2.yaml');
const yml1 = getFixturesPath('file1.yml');
const yml2 = getFixturesPath('file2.yml');
const txt1 = getFixturesPath('file1.txt');
const txt2 = getFixturesPath('file2.txt');

test('path problems', () => {
  expect(() => fileReader(json1, './data/file.json')).toThrow('File not found');
});

test('extention problems', () => {
  expect(() => fileReader(json1, yaml1)).toThrow('Files extensions do not match');
});

test('Correct extention', () => {
  const [, , extJson] = fileReader(json1, json2);
  const [, , extYaml] = fileReader(yaml1, yaml2);
  const [, , extYml] = fileReader(yml1, yml2);

  expect(extJson).toBe('json');
  expect(extYaml).toBe('yaml');
  expect(extYml).toBe('yml');
});

test('Unsupported extention', () => {
  expect(() => fileReader(txt1, txt2)).toThrow('Unsupported file extension: .txt');
});
