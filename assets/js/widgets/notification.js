define([
    'libs/jQuery.toastr',
    'abstractWidget',
], function (toastr) {
    'use strict';

    $.widget('widgets.notification', $.widgets.abstract, {
        cssFiles: [
            'toastr'
        ],
        options: {
            progressBar: true,
        },
        handler: null,

        _run: function () {
            this.handler = toastr;
            this.handler.options = this.options;
        },

        info: function (text = '', title = '', options = {}) {
            return this.handler.info(text, title, options);
        },

        warning: function (text = '', title = '', options = {}) {
            return this.handler.warning(text, title, options);
        },

        success: function (text = '', title = '', options = {}) {
            return this.handler.success(text, title, options);
        },

        error: function (text = '', title = '', options = {}) {
            return this.handler.error(text, title, options);
        },

        close: function (instance) {
            this.handler.clear(instance, {force: true});
        },
    });
});
