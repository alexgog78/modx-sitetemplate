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

        _run: function () {
            this.element['widgets.notification'] = toastr;
            this.element['widgets.notification'].options = this.options;
        },

        _destroy: function () {
            this.element['widgets.notification'].remove();
            this.element['widgets.notification'] = null;
        },

        info: function (text = '', title = '', options = {}) {
            return this.element['widgets.notification'].info(text, title, options);
        },

        warning: function (text = '', title = '', options = {}) {
            return this.element['widgets.notification'].warning(text, title, options);
        },

        success: function (text = '', title = '', options = {}) {
            return this.element['widgets.notification'].success(text, title, options);
        },

        error: function (text = '', title = '', options = {}) {
            return this.element['widgets.notification'].error(text, title, options);
        },

        close: function (instance) {
            this.element['widgets.notification'].clear(instance, {force: true});
        },
    });
});
