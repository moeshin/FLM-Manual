#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const helper = require('./helper.js');

const yargs = require('yargs');
// noinspection JSUnresolvedFunction
const argv = yargs
    .usage('$0 <file> [out]', 'HTML 转 Markdown。')
    .version(false)
    .argv;

let out = argv.out;
if (out === undefined) {
    out = helper.basename(argv.file, 'md');
} else if (fs.existsSync(out) && fs.statSync(out).isDirectory()) {
    out = path.resolve(out, helper.basename(argv.file, 'md'));
}

helper.write(out, helper.toMarkdown(helper.read(argv.file), out));