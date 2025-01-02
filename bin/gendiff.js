#!/usr/bin/env node
import gendiffCli from '../index.js';

const program = gendiffCli();
program.parse(process.argv);
