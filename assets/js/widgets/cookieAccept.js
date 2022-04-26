define([
    'widgets/notification',
], function () {
    'use strict';

    $.widget('widgets.cookieAccept', $.widgets.abstract, {
        cssFiles: [],
        options: {
            title: 'Cookie-файлы',
            text: 'На сайте используются файлы cookie и другие аналогичные средства. Если вы остаётесь на сайте после прочтения данной информации, это означает, что вы не возражаете против их использования.',
            closeHtml: '<button type="button">Принять</button>',
            storageKey: 'is_cookie_accepted',
            target: 'body',
            containerId: "cookie-popup-container",
            positionClass: 'cookie-popup',
            toastClass: "",
            iconClass: "cookie-popup__content",
            titleClass: 'cookie-popup__title',
            messageClass: 'cookie-popup__message',
            closeClass: "cookie-popup__button",
            preventDuplicates: true,
            closeButton: true,
            progressBar: false,
            tapToDismiss: false,
            extendedTimeOut: 0,
            timeOut: 0,
        },
        instance: null,

        _run: function () {
            this.options.onCloseClick = this._setState.bind(this);
            if (!this._getState()) {
                this._open();
            }
        },

        _destroy: function () {
            this._close();
            this._removeState();
        },

        _open: function () {
            this.instance = $(document).notification('info', this.options.text, this.options.title, this.options);
        },

        _close: function () {
            $(document).notification('close', this.instance);
        },

        _getState: function () {
            return localStorage.getItem(this.options.storageKey);
        },

        _setState: function () {
            localStorage.setItem(this.options.storageKey, true);
        },

        _removeState: function () {
            localStorage.removeItem(this.options.storageKey);
        },
    });
});
