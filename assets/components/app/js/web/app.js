require([
    'jquery',
], function ($) {
    'use strict';

    $('form')
        .on('formAjax.successSubmit', function (e, response) {
            switch (response.success) {
                case 1:
                case '1':
                case true:
                    $(e.target).formAjax('clearForm');
                    $(document).notification('success', response.message);
                    break;
                case 0:
                case '0':
                case false:
                    $(document).notification('error', response.message);
                    break;
            }
        })
        .on('formAjax.errorSubmit', function (e, response) {
            $(document).notification('error', 'Ошибка обработки формы. Попробуйте еще раз.');
        });
});
