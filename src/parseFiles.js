import fs from 'fs';

export default (path1, path2) => {
  const getExtention = (path) => path.split('.').reverse()[0];
  if (getExtention(path1) !== 'json' || getExtention(path2) !== 'json') {
    return [null, null];
  }

  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');
  console.log(typeof JSON.parse(file1));
  return [JSON.parse(file1), JSON.parse(file2)];
};
