const cheerio = require('cheerio');
module.exports = {
    book: {
        "assets": "assets",
        "js": [
            "https://cdn.jsdelivr.net/npm/sweetalert2@9.8.1/dist/sweetalert2.all.min.js",
            "script.js"
        ],
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
                    const matches = src.match(/^https?:\/\/(?:www|m).bilibili.com\/video\/(?:av(\d+)|(BV[a-z0-9]+))(?:[?&]p=(\d+))?(?:[?&]|$)/i);
                    if (!matches) {
                        throw new Error('Format Error：' + src);
                    }
                    let video = matches[1];
                    if (video) {
                        video = `aid=${video}`;
                    } else {
                        video = `bvid=${matches[2]}`;
                    }
                    const page = matches[3] || 1;
                    a.replaceWith(`<div class="bilibili"><iframe src="https://player.bilibili.com/player.html?${video}&page=${page}" allowfullscreen></iframe></div>`);
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
