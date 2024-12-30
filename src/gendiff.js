
import { Command } from 'commander';
import findDiff from './findDiff.js';

const program = new Command();

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .arguments('<path1> <path2>')
    .action((path1, path2) => {
      console.log(findDiff(path1, path2));
    });

  return program;
};
