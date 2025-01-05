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
      return 'error';
  }
};

const transformToString = (obj) => {
  const arrayOfLines = Object.entries(obj);

  const formatLines = arrayOfLines.map(([key, {
    status, value, oldValue, newValue,
  }]) => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      return formatString(key, {
        status, value, oldValue, newValue,
      });
    }

    return `${key}: {\n${transformToString(value)}\n}`;
  });

  return `{\n${formatLines.join('\n')}\n}`;
};

export default transformToString;
