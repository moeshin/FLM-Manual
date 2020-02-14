#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const turndown = require('turndown');
const cheerio = require('cheerio');
const CODING = 'UTF-8';

const yargs = require('yargs');
// noinspection JSUnresolvedFunction
const argv = yargs
    .usage('$0 <file> [out]', 'Export markdown form html.')
    .version(false)
    .argv;

function nameToMd(name) {
    return path.basename(name).replace(/\..+$/, '') + '.md';
}

let out = argv.out;
if (out === undefined) {
    out = nameToMd(argv.file);
} else if (fs.existsSync(out) && fs.statSync(out).isDirectory()) {
    out = path.resolve(out, nameToMd(argv.file));
}
let html = fs.readFileSync(argv.file, CODING);
const $ = cheerio.load(html, {decodeEntities: false});
$('a[id]').wrap('<p></p>');
$('#rightcol>:first-child, hr:last-child, hr:nth-last-child(2), hr:nth-last-child(2)+p').remove();
html = $('#rightcol').html();
// noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
const md = new turndown({
    headingStyle: 'atx',
    emDelimiter: '*',
    linkStyle: 'referenced',
    blankReplacement: function (content) {
        return content.match(/^<a id=".+"><\/a>$/) ? content : '';
    },
    keepReplacement: function (content, node) {
        return node.nodeName === 'A' && node.id ? node.outerHTML : '';
    }
}).keep(node => node.nodeName === 'A' && node.id).turndown(html);
fs.writeFileSync(out, md, CODING);
