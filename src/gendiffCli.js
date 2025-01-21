import { Command } from 'commander';
import genDiff from './gendiff.js';

const program = new Command();

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format', 'stylish')
    .arguments('<path1> <path2>')
    .action((path1, path2, options) => {
      console.log(genDiff(path1, path2, options.format));
    });

  return program;
};
