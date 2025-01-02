import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export default (path1, path2) => {
  const getExtention = (filePath) => path.extname(filePath);
  // const allowedExtentions = 'json' || 'yaml' || 'yml';

  if (getExtention(path1) === '.json' && getExtention(path2) === '.json') {
    const file1 = fs.readFileSync(path1, 'utf-8');
    const file2 = fs.readFileSync(path2, 'utf-8');

    return [JSON.parse(file1), JSON.parse(file2)];
  }

  if (getExtention(path1) === ('.yaml' || '.yml') && getExtention(path2) === ('.yaml' || '.yml')) {
    const file1 = fs.readFileSync(path1, 'utf-8');
    const file2 = fs.readFileSync(path2, 'utf-8');

    return [yaml.load(file1), yaml.load(file2)];
  }

  return [null, null];
};
