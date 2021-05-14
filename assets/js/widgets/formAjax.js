define([
    'libs/jQuery.form',
    'widgets/formValidate',
    'widgets/notification',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.formAjax', $.widgets.abstract, {
        options: {
            submitClass: 'processing',
            successClass: 'success',
            errorClass: 'error',
        },

        _run: function () {
            let widget = this;
            this.element.formValidate();
            this.element.ajaxForm({
                type: 'POST',
                dataType: 'json',
                beforeSubmit: function () {
                    widget._beforeSubmit.apply(widget, arguments);
                },
                success: function () {
                    widget._successSubmit.apply(widget, arguments);
                },
                error: function () {
                    widget._errorSubmit.apply(widget, arguments);
                },
            });
        },

        _beforeSubmit: function (arr, $form, options) {
            if (!this._validate()) {
                return false;
            }
            this.element.addClass(this.options.submitClass);
            $(':button, [type="submit"]', this.element).attr('disabled', true).prop('disabled', true);
        },

        _successSubmit: function (response, statusText, xhr, $form) {
            this.element.removeClass(this.options.submitClass);
            if (!response.status) {
                return this._callbacks.error.call(this, response);
            }
            return this._callbacks.success.call(this, response);
        },

        _errorSubmit: function (xhr, status, error, $form) {
            console.error('Ошибка обработки формы: ' + error);
            console.log(xhr.responseJSON);
            this.element.removeClass(this.options.submitClass);
            this.element.addClass(this.options.errorClass);
            $(':button, [type="submit"]', this.element).attr('disabled', false).prop('disabled', false);
            $(document).notification('error', 'Ошибка обработки формы. Попробуйте еще раз.');
        },

        _validate: function () {
            return this.element.valid();
        },

        _callbacks: {
            error: function (response) {
                this.element.addClass(this.options.errorClass);
                $(document).notification('error', response.message);
                $(':button, [type="submit"]', this.element).attr('disabled', false).prop('disabled', false);
                return false;
            },
            success: function (response) {
                this.element.addClass(this.options.successClass);
                this.element.clearForm();
                $(document).notification('success', response.message);
                let $message = this.element.find('[data-role="success"]');
                if ($message.length) {
                    this.element.children().hide();
                    $message.show();
                }
                return true;
            }
        },
    });
});
