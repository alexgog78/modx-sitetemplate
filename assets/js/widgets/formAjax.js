define([
    'libs/jQuery.form',
    'widgets/formValidate',
], function () {
    'use strict';

    $.widget('widgets.formAjax', $.widgets.abstract, {
        options: {
            submitClass: 'processing',
        },

        _run: function () {
            this.element.formValidate();
            this.element.ajaxForm({
                type: 'POST',
                dataType: 'json',
                beforeSubmit: this._beforeSubmit.bind(this),
                success: this._successSubmit.bind(this),
                error: this._errorSubmit.bind(this),
            });
        },

        _destroy: function () {
            this.element.off('submit');
            this.element.formValidate('destroy');
        },

        clearForm: function () {
            this.element.clearForm();
        },

        _beforeSubmit: function (arr, $form, options) {
            if (!this.element.valid()) {
                return false;
            }
            $(':button, [type="submit"]', this.element).attr('disabled', true).prop('disabled', true);
            this.element.addClass(this.options.submitClass).trigger('formAjax.beforeSubmit', arr);
        },

        _successSubmit: function (response, statusText, xhr, $form) {
            $(':button, [type="submit"]', this.element).attr('disabled', false).prop('disabled', false);
            this.element.removeClass(this.options.submitClass).trigger('formAjax.successSubmit', response);
        },

        _errorSubmit: function (xhr, status, error, $form) {
            console.error(status, '/', error, '/', xhr);
            $(':button, [type="submit"]', this.element).attr('disabled', false).prop('disabled', false);
            this.element.removeClass(this.options.submitClass).trigger('formAjax.errorSubmit');
        },
    });
});
