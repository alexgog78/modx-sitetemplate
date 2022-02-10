define([
    'widgets/inputMask',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.inputTel', $.widgets.inputMask, {
        options: {
            mask: '9 (999) 999-99-99',
        },

        _run: function () {
            this._super();
        },
    });
});
