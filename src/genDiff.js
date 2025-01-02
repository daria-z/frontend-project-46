import parseFiles from './parsers.js';
import findDiff from './findDiff.js';

export default (path1, path2) => {
  const [file1, file2] = parseFiles(path1, path2);

  if (!file1 || !file2) {
    return null;
  }

  return findDiff(file1, file2);
};
