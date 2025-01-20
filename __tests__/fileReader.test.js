import path from 'path';
import fileReader from '../src/fileReader.js';

const getFixturesPath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
const json1 = getFixturesPath('file1.json');
const yaml1 = getFixturesPath('file1.yaml');
const yml1 = getFixturesPath('file1.yml');
const txt1 = getFixturesPath('file1.txt');

test('path problems', () => {
  expect(() => fileReader('./data/file.json')).toThrow('File not found');
});

test('Correct extention', () => {
  const [, extJson] = fileReader(json1);
  const [, extYaml] = fileReader(yaml1);
  const [, extYml] = fileReader(yml1);

  expect(extJson).toBe('json');
  expect(extYaml).toBe('yaml');
  expect(extYml).toBe('yml');
});

test('Unsupported extention', () => {
  expect(() => fileReader(txt1)).toThrow('Unsupported file extension: .txt');
});
