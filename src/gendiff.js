import path from 'path';
import parseFile from './parsers.js';
import findDiff from './findDiff.js';
import fileReader from './fileReader.js';
import { formatToStylish, formatToPlain } from './formatters/index.js';

export default (path1, path2, format = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), path1);
  const absolutePath2 = path.resolve(process.cwd(), path2);
  const file1 = parseFile(fileReader(absolutePath1));
  const file2 = parseFile(fileReader(absolutePath2));
  const diff = findDiff(file1, file2);

  switch (format) {
    case 'plain':
      return formatToPlain(diff);
    case 'stylish':
      return formatToStylish(diff);
    case 'json':
      return JSON.stringify(diff, '', 2);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
