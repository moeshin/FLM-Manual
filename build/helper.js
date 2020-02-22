const path = require('path');
const fs = require('fs');
const CODING = 'UTF-8';

function toMarkdown(html, out = undefined) {

    const turndown = require('turndown');
    const {gfm} = require('turndown-plugin-gfm');
    const cheerio = require('cheerio');

    if (out !== undefined) {
        out = out.replace(/ /g, '%20');
    }
    let $ = cheerio.load(html, {decodeEntities: false});

    const a = $('a[id]');
    const aLength = a.length;
    const aTmp = String.fromCharCode(24);
    for (let i = 0; i < aLength; i++) {
        // 为空锚点添加内容，并在 keepReplacement 中删除
        $(a[i]).text(aTmp);
    }

    const container = $('#rightcol');
    if (container.length !== 0) {
        $('#rightcol>:first-child, hr:last-child, hr:nth-last-child(2), hr:nth-last-child(2)+p').remove();
        html = container.html();
    } else {
        html = $.html();
    }

    const arrHref = [];
    let arrIndex = 0;
    let returnContent;
    // noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
    return new turndown({
        headingStyle: 'atx',
        emDelimiter: '*',
        linkStyle: 'referenced',
        keepReplacement: function (content, node) {
            console.log('keepReplacement:', node.nodeName, content);
            if (node.nodeName === 'FONT') {
                // noinspection HtmlDeprecatedAttribute,HtmlDeprecatedTag
                return `<font color="${node.getAttribute('color')}">${content}</font>`;
            }
            if (node.nodeName === 'A' && node.textContent === aTmp) {
                const id = node.id;
                if (id) {
                    return `<a id="${id}"></a>`;
                }
            }
            console.warn('未知规则');
            return '';
        },
        blankReplacement: function (content, node) {
            console.log('blankReplacement:', node.nodeName, content);
            return content;
        }
    }).addRule('custom-rule', {
        filter: function (node) {
            if (node.nodeName === 'A' && node.hasAttribute('href')) {
                returnContent = false;
                let href = node.getAttribute('href');
                if (href === node.textContent) {
                    // 不自动链接
                    returnContent = true;
                    return true;
                }
                let hasChange = false;
                href = href.replace(/^([^\\/.]+\.)[^#.]+(.*)$/, function (m0, m1, m2) {
                    // 更改使用相对路径文件的扩展名
                    hasChange = true;
                    return `${m1}md${m2}`;
                }).replace(/ /g, function () {
                    // 替换链接中的空格——Url 编码
                    hasChange = true;
                    return '%20';
                }).replace(/^FL%20Studio%20Mobile_/, function () {
                    hasChange = true;
                    return '';
                });
                if (out !== undefined) {
                    // 简化在当前页的锚点
                    href = href.replace(out + '#', function () {
                        hasChange = true;
                        return '#';
                    });
                }
                if (hasChange) {
                    node.setAttribute('href', href);
                }
                const length = arrHref.length;
                for (let i = 0; i < length; i++) {
                    if (arrHref[i] === href) {
                        arrIndex = i + 1;
                        return true;
                    }
                }
                arrHref.push(href);
            } else if (node.nodeName === 'STRONG' || node.nodeName === 'EM') {
                // https://github.github.com/gfm/#left-flanking-delimiter-run
                let text = node.textContent;
                const prev = node.previousSibling;
                const next = node.nextSibling;
                if (/^[\p{P}]/u.test(text) && prev && prev.nodeType === 3 && /[^\p{P} ]$/u.test(prev.textContent)) {
                    prev.textContent += ' ';
                }
                if (/[\p{P}]$/u.test(text) && next && next.nodeType === 3 && /^[^\p{P} ]/u.test(next.textContent)) {
                    next.textContent = ' ' + next.textContent;
                }
            }
            return false;
        },
        replacement: function (content) {
            if (returnContent) {
                return content;
            }
            return `[${content}][${arrIndex}]`;
        }
    }).keep(function (node) {
        console.log('keep: ', node.nodeName);
        return (node.nodeName === 'A' && node.id) || (node.nodeName === 'FONT' && node.hasAttribute('color'));
    }).use(gfm).turndown(html);
}

function toHtml(markdown) {
    const marked = require('marked');
    markdown = markdown.replace(/(\[[^\]]+]\()([^(]* [^(]*)\)/g, function (m0, m1, m2) {
        // 替换链接中的空格——Url 编码
        return `${m1}${m2.replace(/ /g, '%20')})`;
    });
    return marked(markdown, {
        gfm: true,
        breaks: true,
        mangle: false
    });
}

module.exports = {
    basename: (name, extname) => path.basename(name)
        .replace(/^FL Studio Mobile_/, '')
        .replace(/\..+$/, '') + '.' + extname,
    read: path => fs.readFileSync(path, CODING),
    write: (path, data) => fs.writeFileSync(path, data, CODING),
    toMarkdown: toMarkdown,
    toHtml: toHtml
};