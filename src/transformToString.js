/* eslint-disable no-use-before-define */
import { isPlainObject } from 'lodash-es';

const indent = (depth, option = 0) => ' '.repeat(depth * 4 - option);

export const formatDiffLine = (key, {
  status, value, oldValue, newValue,
}, depth = 1) => {
  switch (status) {
    case 'object':
      return `${indent(depth)}${key}: {\n${formatObjectDiff(value, depth + 1)}\n${indent(depth)}}`;
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

const formatValue = (value, depth) => {
  if (value === null) return 'null';
  if (isPlainObject(value)) {
    return formatPlainObject(value, depth + 1);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => formatValue(item, depth)).join(',')}]`;
  }
  return String(value);
};

const formatPlainObject = (obj, depth) => {
  const lines = Object.entries(obj).map(([key, value]) => `${indent(depth)}${key}: ${formatValue(value, depth)}`);
  return `{\n${lines.join('\n')}\n${indent(depth - 1)}}`;
};

const formatObjectDiff = (obj, depth) => {
  const lines = Object.entries(obj).map(([key, data]) => formatDiffLine(key, data, depth));

  return `${lines.join('\n')}`;
};

const wrappedResult = (obj) => `{\n${formatObjectDiff(obj)}\n}`;

export default wrappedResult;
