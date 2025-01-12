import transformToString, { formatDiffLine } from '../src/transformToString.js';

test('simple string', () => {
  const key = 'verbose';
  const valueObject = { status: 'added', value: true };
  const result = '  + verbose: true';
  expect(formatDiffLine(key, valueObject)).toEqual(result);
});

test('string changed', () => {
  const key = 'timeout';
  const valueObject = { status: 'changed', oldValue: '50', newValue: '20' };
  const result = '  - timeout: 50\n  + timeout: 20';
  expect(formatDiffLine(key, valueObject)).toEqual(result);
});

test('string unchanged', () => {
  const key = 'timeout';
  const valueObject = { status: 'unchanged', value: '50' };
  const result = '    timeout: 50';
  expect(formatDiffLine(key, valueObject)).toEqual(result);
});

test('few strings', () => {
  const data = {
    follow: { status: 'deleted', value: false },
    host: { status: 'unchanged', value: 'hexlet.io' },
    proxy: { status: 'deleted', value: '123.234.53.22' },
    timeout: { status: 'changed', oldValue: 50, newValue: 20 },
    verbose: { status: 'added', value: true },
  };
  const result = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

  expect(transformToString(data)).toEqual(result);
});
