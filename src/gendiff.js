
import { Command } from 'commander';
import readFile from './readFile.js';

const program = new Command();

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .arguments('<path1> <path2>')
    .action((path1, path2) => {
      readFile(path1, path2);
    });

  return program;
};
