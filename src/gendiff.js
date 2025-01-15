import parseFiles from './parsers.js';
import findDiff from './findDiff.js';
import fileReader from './fileReader.js';
import { formatToStylish, formatToPlain } from './formatters/index.js';

export default (path1, path2, format = 'stylish') => {
  const [file1, file2] = parseFiles(fileReader(path1, path2));
  const diff = findDiff(file1, file2);

  switch (format) {
    case 'plain':
      return formatToPlain(diff);
    case 'stylish':
      return formatToStylish(diff);
    case 'json':
      return JSON.stringify(diff, '', 2);
    default:
      return formatToStylish(diff);
  }
};
