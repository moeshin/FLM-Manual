(function () {

    function handleSidebar() {
        const arr = $('nav li[data-path]>span');
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            const elem = arr[i];
            $(elem).replaceWith($('<a href>' + elem.textContent + '</a>').click(window.alertNotFound));
        }
    }

    window.alertNotFound = function (a1, a2) {
        if (a2 && a2 !== 'error') {
            handleSidebar();
            return;
        }
        Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: '找不到该内容',
            html:
                '可能还未翻译，您可以前往 ' +
                '<a target="_blank" href="https://github.com/moeshin/FLM-Manual">GitHub</a>' +
                ' 或者 ' +
                '<a target="_blank" href="https://gitee.com/moeshin/FLM-Manual">Gitee</a>' +
                ' 参与编辑。'
        });
    };

    $(handleSidebar);

})();

