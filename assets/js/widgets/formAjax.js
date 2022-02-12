define([
    'libs/jQuery.form',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.formAjax', $.widgets.abstract, {
        options: {
            submitClass: 'processing',
        },

        _run: function () {
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
        },

        clearForm: function () {
            this.element.clearForm();
        },

        _beforeSubmit: function (arr, $form, options) {
            $(':button, [type="submit"]', this.element).attr('disabled', true).prop('disabled', true);
            this.element.addClass(this.options.submitClass);
            this.element.trigger('formAjax._beforeSubmit', arr);
        },

        _successSubmit: function (response, statusText, xhr, $form) {
            $(':button, [type="submit"]', this.element).attr('disabled', false).prop('disabled', false);
            this.element.removeClass(this.options.submitClass);
            this.element.trigger('formAjax.successSubmit', response);
        },

        _errorSubmit: function (xhr, status, error, $form) {
            console.error('Ошибка обработки формы: ' + error);
            console.log(xhr.responseJSON);
            $(':button, [type="submit"]', this.element).attr('disabled', false).prop('disabled', false);
            this.element.removeClass(this.options.submitClass);
            this.element.trigger('formAjax.errorSubmit');
        },
    });
});
