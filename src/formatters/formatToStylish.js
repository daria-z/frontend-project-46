import { isPlainObject } from 'lodash-es';

const indent = (depth, option = 0) => ' '.repeat(depth * 4 - option);

const formatValue = (value, depth) => {
  if (value === null) return 'null';

  if (isPlainObject(value)) {
    const lines = Object.entries(value).map(([key, localValue]) => `${indent(depth + 1)}${key}: ${formatValue(localValue, depth + 1)}`);
    return `{\n${lines.join('\n')}\n${indent(depth)}}`;
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => formatValue(item, depth)).join(',')}]`;
  }
  return String(value);
};

export default (initialObject) => {
  const formatDiff = (obj, initialDepth) => {
    const formatLine = (key, {
      status, value, oldValue, newValue,
    }, depth = 1) => {
      switch (status) {
        case 'object':
          return `${indent(depth)}${key}: {\n${formatDiff(value, depth + 1)}\n${indent(depth)}}`;
        case 'unchanged':
          return `${indent(depth)}${key}: ${formatValue(value, depth)}`;
        case 'changed':
          return `${indent(depth, 2)}- ${key}: ${formatValue(oldValue, depth)}\n${indent(depth, 2)}+ ${key}: ${formatValue(newValue, depth)}`;
        case 'deleted':
          return `${indent(depth, 2)}- ${key}: ${formatValue(value, depth)}`;
        case 'added':
          return `${indent(depth, 2)}+ ${key}: ${formatValue(value, depth)}`;
        default:
          throw new Error('Status error');
      }
    };
    const lines = Object.entries(obj).map(([key, data]) => formatLine(key, data, initialDepth));

    return `${lines.join('\n')}`;
  };

  return `{\n${formatDiff(initialObject)}\n}`;
};
