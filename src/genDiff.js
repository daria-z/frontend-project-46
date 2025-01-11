import parseFiles from './parsers.js';
import findDiff from './findDiff.js';
import fileReader from './fileReader.js';

export default (path1, path2) => {
  const [file1, file2] = parseFiles(fileReader(path1, path2));

  return findDiff(file1, file2);
};
