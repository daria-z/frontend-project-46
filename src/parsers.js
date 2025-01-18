import yaml from 'js-yaml';

export default ([file1, file2, extension]) => {
  switch (extension) {
    case 'json':
      return [JSON.parse(file1), JSON.parse(file2)];
    case 'yaml':
    case 'yml':
      return [yaml.load(file1), yaml.load(file2)];
    default:
      throw new Error(`Unsupported file extension: ${extension}.`);
  }
};
