import path from 'path';
import { Command } from 'commander';
import gendiff from './genDiff.js';

const program = new Command();

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format', 'stylish')
    .arguments('<path1> <path2>')
    .action((path1, path2, options) => {
      const absolutePath1 = path.resolve(process.cwd(), path1);
      const absolutePath2 = path.resolve(process.cwd(), path2);

      console.log(gendiff(absolutePath1, absolutePath2, options.format));
    });

  return program;
};
