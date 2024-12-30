#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<path1> <path2>')
  .action((path1, path2) => {
    const file1 = fs.readFileSync(path1, 'utf-8');
    const file2 = fs.readFileSync(path2, 'utf-8');
    console.log(path.resolve(process.cwd(), path1));
    console.log(file1);
    // console.log(path.resolve(process.cwd(), path2));
    console.log(file2);
  });

program.parse(process.argv);
