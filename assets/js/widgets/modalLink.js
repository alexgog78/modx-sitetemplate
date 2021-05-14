define([
    'widgets/modalWindow',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.modalLink', $.widgets.abstract, {
        options: {
            src: null,
            data: {},
        },
        src: null,

        _run: function () {
            let widget = this;
            let element = this.element;
            this.src = this.options.src
                ? {
                    src: this.options.src
                } : {
                    src: this.element.attr('href')
                };
            if (this.options.type == 'ajax') {
                this.options.ajax = {
                    settings: {
                        data: this.options.data,
                    },
                };
            }

            element.on('click', function (e) {
                e.preventDefault();
                $(document).modalWindow('show', widget.src, widget.options);
            });
        }
    });
});
