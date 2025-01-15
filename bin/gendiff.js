#!/usr/bin/env node
import gendiffCli from '../src/gendiffCli.js';

const program = gendiffCli();
program.parse(process.argv);
