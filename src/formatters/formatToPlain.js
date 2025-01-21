import { isPlainObject } from 'lodash-es';

const formatPlain = (initialObject) => {
  const formatValue = (value) => {
    if (isPlainObject(value) || Array.isArray(value)) return '[complex value]';
    if (typeof value === 'string') return `'${value}'`;
    return String(value);
  };

  const formatDiff = (obj, path = '') => {
    const lines = Object.entries(obj).flatMap(([key, {
      status, value, oldValue, newValue,
    }]) => {
      const nodePath = path ? `${path}.${key}` : key;

      switch (status) {
        case 'object':
          return formatDiff(value, nodePath);
        case 'unchanged':
          return null;
        case 'changed':
          return `Property '${nodePath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        case 'deleted':
          return `Property '${nodePath}' was removed`;
        case 'added':
          return `Property '${nodePath}' was added with value: ${formatValue(value)}`;
        default:
          throw new Error('Status error');
      }
    });

    return lines.filter((line) => line !== null).join('\n');
  };

  return formatDiff(initialObject);
};

export default formatPlain;
