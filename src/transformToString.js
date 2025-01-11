import { isPlainObject } from 'lodash-es';

export const formatString = (key, {
  status, value, oldValue, newValue,
}) => {
  switch (status) {
    case 'unchanged':
      return `    ${key}: ${value}`;
    case 'changed':
      return `  - ${key}: ${oldValue}\n  + ${key}: ${newValue}`;
    case 'deleted':
      return `  - ${key}: ${value}`;
    case 'added':
      return `  + ${key}: ${value}`;
    default:
      return `    ${key}: ${value}`;
  }
};

const transformToString = (obj) => {
  const arrayOfLines = Object.entries(obj);

  const formatLines = arrayOfLines.map((entry) => {
    const [key, data] = entry;

    if (!isPlainObject(data)) {
      return `    ${key}: ${data}`;
    }

    const {
      status, value, oldValue, newValue,
    } = data;

    if (isPlainObject(data) && status === 'object') {
      return `${key}: {\n${transformToString(value)}\n}`;
    }

    return formatString(key, {
      status, value, oldValue, newValue,
    });
  });

  return `{\n${formatLines.join('\n')}\n}`;
};

export default transformToString;
