define([
    'libs/jQuery.fancyBox',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.modalWindow', $.widgets.abstract, {
        cssFiles: [
            'fancyBox'
        ],
        options: {
            autoFocus: false,
            lang: 'ru',
            i18n: {
                'ru': {
                    CLOSE: 'Закрыть',
                    NEXT: 'Далее',
                    PREV: 'Назад',
                    ERROR: 'Произошла ошибка при загрузке содержимого.<br/>Попробуйте позже.',
                    PLAY_START: 'Начать слайд-шоу',
                    PLAY_STOP: 'Остановить слайд-шоу',
                    FULL_SCREEN: 'Полноэкранный',
                    THUMBS: 'Эскизы',
                }
            }
        },
        handler: null,

        _run: function () {
            this.handler = $.fancybox;
        },

        show: function (src, options = {}, index = 0) {
            options = $.extend({}, this.options, options);
            this.handler.open(src, options, index);
        },
    });
});
