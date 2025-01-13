import findDiff from '../src/findDiff.js';

test('unchanged', () => {
  const file1 = {
    key1: 'value1',
    key2: 'value2',
  };

  const file2 = {
    key1: 'value1',
    key2: 'value2',
  };

  const expected = {
    key1: { status: 'unchanged', value: 'value1' },
    key2: { status: 'unchanged', value: 'value2' },
  };

  expect(findDiff(file1, file2)).toEqual(expected);
});

test('added', () => {
  const file1 = {
    key1: 'value1',
  };

  const file2 = {
    key1: 'value1',
    key2: 'value2',
  };

  const expected = {
    key1: { status: 'unchanged', value: 'value1' },
    key2: { status: 'added', value: 'value2' },
  };

  expect(findDiff(file1, file2)).toEqual(expected);
});

test('deleted', () => {
  const file1 = {
    key1: 'value1',
    key2: 'value2',
  };

  const file2 = {
    key1: 'value1',
  };

  const expected = {
    key1: { status: 'unchanged', value: 'value1' },
    key2: { status: 'deleted', value: 'value2' },
  };

  expect(findDiff(file1, file2)).toEqual(expected);
});

test('deep difference', () => {
  const file1 = {
    common: {
      setting1: 'Value 1',
      setting6: {
        key1: 'value1',
        doge: {
          wow: '',
        },
      },
    },
    group1: {
      baz: 'bas',
      foo: 'bar',
      nest: {
        key: 'value',
      },
    },
    group2: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
  };

  const file2 = {
    common: {
      follow: false,
      setting3: null,
      setting4: 'blah blah',
      setting5: {
        key5: 'value5',
      },
      setting6: {
        key1: 'value1',
        ops: 'vops',
        doge: {
          wow: 'so much',
        },
      },
    },
    group1: {
      baz: 'bars',
      foo: 'bar',
      nest: 'str',
    },
    group3: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
  };

  const expected = {
    common: {
      status: 'object',
      value: {
        follow: { status: 'added', value: false },
        setting1: { status: 'deleted', value: 'Value 1' },
        setting3: { status: 'added', value: null },
        setting4: { status: 'added', value: 'blah blah' },
        setting5: { status: 'added', value: { key5: 'value5' } },
        setting6: {
          status: 'object',
          value: {
            key1: { status: 'unchanged', value: 'value1' },
            ops: { status: 'added', value: 'vops' },
            doge: {
              status: 'object',
              value: {
                wow: { status: 'changed', oldValue: '', newValue: 'so much' },
              },
            },
          },
        },
      },
    },
    group1: {
      status: 'object',
      value: {
        baz: { status: 'changed', oldValue: 'bas', newValue: 'bars' },
        foo: { status: 'unchanged', value: 'bar' },
        nest: { status: 'changed', oldValue: { key: 'value' }, newValue: 'str' },
      },
    },
    group2: {
      status: 'deleted',
      value: {
        abc: 12345,
        deep: { id: 45 },
      },
    },
    group3: {
      status: 'added',
      value: {
        deep: { id: { number: 45 } },
        fee: 100500,
      },
    },
  };
  // console.log(JSON.stringify(findDiff(file1, file2), ' ', 2));
  expect(findDiff(file1, file2)).toEqual(expected);
});
