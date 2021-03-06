define([
    'libs/exampleLib',
], function (exampleLib) {
    'use strict';

    $.widget('widgets.example', $.widgets.abstract, {
        cssFiles: [
            'example'
        ],
        options: {
            example: true,
        },

        _run: function () {
            this.element.exampleLib(this.options);
        },

        _destroy: function () {
            this.element.exampleLib.destroy();
        },
    });
});
