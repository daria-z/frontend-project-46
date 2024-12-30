import fs from 'fs';
// import path from 'path';
// console.log(path.resolve(process.cwd(), path1));
// console.log(path.resolve(process.cwd(), path2));

const readFile = (path1, path2) => {

  if (path1.split('.').reverse()[0] === 'json') {
    const file1 = fs.readFileSync(path1, 'utf-8');
    const file2 = fs.readFileSync(path2, 'utf-8');
    console.log(JSON.parse(file1));
    console.log(JSON.parse(file2));
  }
};

export default readFile;
