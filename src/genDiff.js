import parseFiles from './parsers.js';
import findDiff from './findDiff.js';
import fileReader from './fileReader.js';
import { formatToString, formatToPlain } from './formatters/index.js';

export default (path1, path2, format) => {
  const [file1, file2] = parseFiles(fileReader(path1, path2));
  const diff = findDiff(file1, file2);

  switch (format) {
    case 'plain':
      return formatToPlain(diff);
    case 'stylish':
      return formatToString(diff);
    case 'json':
      return JSON.stringify(diff, '', 2);
    default:
      return formatToString(diff);
  }
};
