const cheerio = require('cheerio');
module.exports = {
    book: {
        "assets": "assets",
        "css": ["style.css"]
    },
    hooks: {
        "page": function (page) {
            const $ = cheerio.load(page.content);
            const arr = $('a');
            const length = arr.length;
            for (let i = 0; i < length; i++) {
                const a = $(arr[i]);
                const src = a.attr('href');
                if (typeof src !== 'string') {
                    continue;
                }
                if (src === a.html()) {
                    // 生成 bilibili 播放器
                    const matches = src.match(/^https?:\/\/(?:www|m).bilibili.com\/video\/av(\d+).*(?:[?&]p=(\d+))(?:&|$)/);
                    if (!matches) {
                        throw new Error('Format Error：' + src);
                    }
                    const av = matches[1];
                    const page = matches[2] || 1;
                    a.replaceWith(`<div class="bilibili"><iframe src="https://player.bilibili.com/player.html?aid=${av}&page=${page}" allowfullscreen></iframe></div>`);
                    continue;
                }
                // 将相对路径下的 md 后缀改为 html
                const matches = src.match(/^([^:]+?)\.md([#?].*)?$/);
                if (!matches) {
                    continue;
                }
                let href = matches[1] + '.html';
                if (matches[2]) {
                    href += matches[2];
                }
                a.attr('href', href);
            }
            page.content = $.html();
            return page;
        }
    }
};
