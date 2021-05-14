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
            this.element.attr('placeholder', '+7 (___) ___ __ __')
            this._super();
        }
    });
});
