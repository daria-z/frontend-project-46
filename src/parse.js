import fs from 'fs';
// import path from 'path';

const readFile = (path1, path2) => {
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');
  // console.log(path.resolve(process.cwd(), path1));
  console.log(file1);
  // console.log(path.resolve(process.cwd(), path2));
  console.log(file2);
};

export default readFile;
