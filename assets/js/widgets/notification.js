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

        info: function (text = '') {
            this.handler.info(text);
        },

        warning: function (text = '') {
            this.handler.warning(text);
        },

        success: function (text = '') {
            this.handler.success(text);
        },

        error: function (text = '') {
            this.handler.error(text);
        },
    });
});
