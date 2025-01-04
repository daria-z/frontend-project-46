const formatString = ([key, obj]) => {
  const {
    status, value, oldValue = null, newValue = null,
  } = obj;

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

export default formatString;
