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

        _run: function () {
            this.element['widgets.modalWindow'] = $.fancybox;
        },

        _destroy: function () {
            this.element['widgets.modalWindow'].close();
            this.element['widgets.modalWindow'] = null;
        },

        show: function (src, options = {}, index = 0) {
            options = $.extend({}, this.options, options);
            this.element['widgets.modalWindow'].open(src, options, index);
        },

        close: function () {
            this.element['widgets.modalWindow'].close();
        },
    });
});
