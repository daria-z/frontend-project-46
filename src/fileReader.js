import path from 'path';
import fs from 'fs';

export default (path1, path2) => {
  const getExtension = (filePath) => path.extname(filePath);

  const ext1 = getExtension(path1);
  const ext2 = getExtension(path2);

  if (ext1 !== ext2) {
    return [null, null];
  }

  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');

  switch (ext1) {
    case '.json':
      return [file1, file2, 'json'];
    case '.yaml':
      return [file1, file2, 'yaml'];
    case '.yml':
      return [file1, file2, 'yml'];
    default:
      return [null, null];
  }
};
