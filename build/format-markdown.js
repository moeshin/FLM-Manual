#!/usr/bin/env node

const path = require('path');
const helper = require('./helper.js');

const yargs = require('yargs');
// noinspection JSUnresolvedFunction
const argv = yargs
    .usage('$0 <file>', '格式化 Markdown')
    .version(false)
    .argv;

const file = argv.file;
const content = helper.toMarkdown(helper.toHtml(helper.read(file)), path.basename(file));
helper.write(file, content);