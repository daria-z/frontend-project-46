import parseFiles from '../src/parseFiles.js';

const nullResult = [null, null];

test('without extention', () => {
  const path1 = './src/data/file1';
  const path2 = './src/data/file2.json';

  expect(parseFiles(path1, path2)).toEqual(nullResult);
});

test('yaml files', () => {
  const path1 = './src/data/file1.json';
  const path2 = './src/data/file2.yaml';

  expect(parseFiles(path1, path2)).toEqual(nullResult);
});

test('result is array', () => {
  const path1 = './src/data/file1.json';
  const path2 = './src/data/file2.json';

  expect(parseFiles(path1, path2)).toBeInstanceOf(Array);
});

test('typeof parsing results', () => {
  const path1 = './src/data/file1.json';
  const path2 = './src/data/file2.json';
  const [file1, file2] = parseFiles(path1, path2);
  expect(file1 && file2).toBeInstanceOf(Object);
});
