import yaml from 'js-yaml';

export default ([file1, extension]) => {
  switch (extension) {
    case 'json':
      return JSON.parse(file1);
    case 'yaml':
    case 'yml':
      return yaml.load(file1);
    default:
      throw new Error(`Unsupported file extension: ${extension}.`);
  }
};
