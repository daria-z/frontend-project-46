import path from 'path';
import fs from 'fs';

export default (filePath) => {
  const getExtension = (file) => path.extname(file);

  if (!fs.existsSync(filePath)) {
    throw new Error('File not found.');
  }

  const ext = getExtension(filePath);

  const file1 = fs.readFileSync(filePath, 'utf-8');

  switch (ext) {
    case '.json':
      return [file1, 'json'];
    case '.yaml':
      return [file1, 'yaml'];
    case '.yml':
      return [file1, 'yml'];
    default:
      throw new Error(`Unsupported file extension: ${ext}`);
  }
};
