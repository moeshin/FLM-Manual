const cheerio = require('cheerio');
module.exports = {
    book: {
        "assets": "assets",
        "css": ["style.css"]
    },
    hooks: {
        "page": function (page) {
            const $ = cheerio.load(page.content);
            $('a').each(function(i, elem) {
                const a = $(elem);
                const src = a.attr("href");
                if (src !== a.html()) {
                    return;
                }
                const matches = src.match(/^https?:\/\/(?:www|m).bilibili.com\/video\/av(\d+).*(?:[?&]p=(\d+))(?:&|$)/);
                if (!matches) {
                    throw new Error('Format Error：' + src);
                }
                const av = matches[1];
                const page = matches[2] || 1;
                a.replaceWith(`<div class="bilibili"><iframe src="https://player.bilibili.com/player.html?aid=${av}&page=${page}" allowfullscreen></iframe></div>`);
            });
            page.content = $.html();
            return page;
        }
    }
};
