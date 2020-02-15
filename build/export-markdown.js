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
const a_href = [];
let a_index = 0;
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
}).addRule('a_replace', {
    filter: function (node) {
        if (node.nodeName === 'A' && node.hasAttribute('href')) {
            let has_change = false;
            const href = node.getAttribute('href').replace(/^([^\\/]+\.)[^#]+(.*)$/, function (m0, m1, m2) {
                has_change = true;
                return `${m1}md${m2}`;
            }).replace(/ /g, function () {
                has_change = true;
                return '%20';
            });
            if (has_change) {
                node.setAttribute('href', href);
            }
            const length = a_href.length;
            for (let i = 0; i < length; i++) {
                if (a_href[i] === href) {
                    a_index = i + 1;
                    return true;
                }
            }
            a_href.push(href);
        }
        return false;
    },
    replacement: function (content) {
        return `[${content}][${a_index}]`;
    }
}).keep(node => node.nodeName === 'A' && node.id).turndown(html);
fs.writeFileSync(out, md, CODING);
