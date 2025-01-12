import parseFiles from './parsers.js';
import findDiff from './findDiff.js';
import fileReader from './fileReader.js';
import { formatToString, formatToPlain } from './formatters/index.js';

export default (path1, path2, format) => {
  const [file1, file2] = parseFiles(fileReader(path1, path2));
  const diff = findDiff(file1, file2);

  switch (format) {
    case 'plain':
      console.log('plain format');
      return formatToPlain(diff);
    default:
      return formatToString(diff);
  }
};
