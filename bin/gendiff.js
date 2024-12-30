#!/usr/bin/env node
import gendiff from '../index.js';

const program = gendiff();
program.parse(process.argv);
