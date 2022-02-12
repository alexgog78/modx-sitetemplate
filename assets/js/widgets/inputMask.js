define([
    'libs/jQuery.maskedInput',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.inputMask', $.widgets.abstract, {
        options: {
            mask: '',
            placeholder: '_'
        },

        _run: function () {
            this.element.mask(this.options.mask, this.options);
        },

        _destroy: function () {
            this.element.unmask();
        },
    });
});
