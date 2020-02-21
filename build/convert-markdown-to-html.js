#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const helper = require('./helper.js');

const yargs = require('yargs');
// noinspection JSUnresolvedFunction
const argv = yargs
    .usage('$0 <file> [out]', 'Markdown 转 HTML。')
    .version(false)
    .argv;

let out = argv.out;
if (out === undefined) {
    out = helper.basename(argv.file, 'html');
} else if (fs.existsSync(out) && fs.statSync(out).isDirectory()) {
    out = path.resolve(out, helper.basename(argv.file, 'html'));
}

helper.write(out, helper.toHtml(helper.read(argv.file)));