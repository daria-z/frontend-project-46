import findDiff from '../src/findDiff.js';

test('findDiff correct working', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
    verbose: false,
  };

  const obj2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  const expected = [
    ['-', 'follow', false],
    [' ', 'host', 'hexlet.io'],
    ['-', 'proxy', '123.234.53.22'],
    ['-', 'timeout', 50],
    ['+', 'timeout', 20],
    ['-', 'verbose', false],
    ['+', 'verbose', true],
  ];

  expect(expected).toEqual(findDiff(obj1, obj2));
});

test('empty files', () => {
  const obj1 = {};
  const obj2 = {};

  expect(findDiff(obj1, obj2)).toEqual([]);
});

test('one empty file', () => {
  const obj1 = {};
  const obj2 = {
    timeout: 20,
    verbose: true,
  };

  expect(findDiff(obj1, obj2)).toEqual([
    ['+', 'timeout', 20],
    ['+', 'verbose', true],
  ]);
});

// const path1 = './__fixtures__/file1.json';
// const path2 = './__fixtures__/file2.json';
// const result = fs.readFileSync('./__fixtures__/result.txt').toString();

// test('is string', () => {
//   const diffResult = findDiff(path1, path2);
//   expect(typeof diffResult).toBe('string');
// });

// test('same result', () => {
//   const diffResult = findDiff(path1, path2);
//   expect(diffResult).toEqual(result);
// });
