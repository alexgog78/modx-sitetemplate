define([
    'widgets/notification',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.cookieAccept', $.widgets.abstract, {
        cssFiles: [],
        options: {
            title: 'Cookie-файлы',
            text: '<div class="cookie-popup"><p>На сайте используются файлы cookie и другие аналогичные средства. Если вы остаётесь на сайте после прочтения данной информации, это означает, что вы не возражаете против их использования.</p><button type="submit" class="clear">Принять</button></div>',
            storageKey: 'is_cookie_accepted',
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            closeButton: true,
            extendedTimeOut: 0,
            timeOut: 0,
            tapToDismiss: false,
        },
        instance: null,

        _run: function () {
            let widget = this;
            $(document).on('click', '.cookie-popup [type="submit"]', function (e) {
                e.preventDefault();
                localStorage.setItem(widget.options.storageKey, true);
                $(document).notification('close', widget.instance);
            });

            let isCookieAccepted = localStorage.getItem(this.options.storageKey);
            if (!isCookieAccepted) {
                this.instance = $(document).notification('info', this.options.text, this.options.title, this.options);
            }
        },
    });
});
