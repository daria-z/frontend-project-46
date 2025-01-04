import transformToString from '../src/transformToString.js';

test('simple string', () => {
  const data = { verbose: { status: 'added', value: true } };
  const result = '  + verbose: true';
  expect(transformToString(...Object.entries(data))).toEqual(result);
});

test('string changed', () => {
  const data = {
    timeout: { status: 'changed', oldValue: '50', newValue: '20' },
  };
  const result = '  - timeout: 50\n  + timeout: 20';
  expect(transformToString(...Object.entries(data))).toEqual(result);
});

test('string unchanged', () => {
  const data = {
    timeout: { status: 'unchanged', value: '50' },
  };
  const result = '    timeout: 50';
  expect(transformToString(...Object.entries(data))).toEqual(result);
});
