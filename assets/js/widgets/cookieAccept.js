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
            $(document).on('click.cookieAccept', '.cookie-popup [type="submit"]', this._submit.bind(this));
            if (!this._getState()) {
                this.instance = $(document).notification('info', this.options.text, this.options.title, this.options);
            }
        },

        _destroy: function () {
            $(document).notification('close', this.instance);
        },

        _submit: function (e) {
            e.preventDefault();
            this._setState();
            $(document).notification('close', this.instance);
        },

        _getState: function () {
            return localStorage.getItem(this.options.storageKey);
        },

        _setState: function () {
            localStorage.setItem(this.options.storageKey, true);
        },
    });
});
