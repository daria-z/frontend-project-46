/* eslint-disable no-use-before-define */
import { isPlainObject } from 'lodash-es';

export const formatDiffLine = (key, {
  status, value, oldValue, newValue,
}) => {
  switch (status) {
    case 'object':
      return `    ${key}: {${formatObjectDiff(value)}}`;
    case 'unchanged':
      return `    ${key}: ${formatValue(value)}`;
    case 'changed':
      return `  - ${key}: ${formatValue(oldValue)}\n  + ${key}: ${formatValue(newValue)}`;
    case 'deleted':
      return `  - ${key}: ${formatValue(value)}`;
    case 'added':
      return `  + ${key}: ${formatValue(value)}`;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
};

const formatValue = (value) => {
  if (value === null) return 'null';
  if (isPlainObject(value)) {
    return formatPlainObject(value);
  }
  if (Array.isArray(value)) return `[${value.map((item) => formatValue(item)).join(', ')}]`;
  return String(value);
};

const formatPlainObject = (obj) => {
  const lines = Object.entries(obj)
    .map(([key, value]) => `${key}: ${formatValue(value)}`);
  return `{${lines.join('\n')}}`;
};

const formatObjectDiff = (obj) => {
  const lines = Object.entries(obj).map(([key, data]) => formatDiffLine(key, data));

  return `${lines.join('\n')}`;
};

const wrappedResult = (obj) => `{\n${formatObjectDiff(obj)}\n}`;

export default wrappedResult;
