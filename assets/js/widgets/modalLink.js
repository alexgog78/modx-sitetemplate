define([
    'widgets/modalWindow',
], function () {
    'use strict';

    $.widget('widgets.modalLink', $.widgets.abstract, {
        options: {
            src: null,
            data: {},
        },
        src: null,

        _run: function () {
            this._prepareSrc();
            if (this.options.type === 'ajax') {
                this._prepareAjaxData();
            }
            this.element.on('click.modalLink', this._open.bind(this));
        },

        _destroy: function () {
            this.element.unbind('click.modalLink');
        },

        _prepareSrc: function () {
            this.src = this.options.src ? {
                src: this.options.src
            } : {
                src: this.element.attr('href')
            };
        },

        _prepareAjaxData: function () {
            this.options.ajax = {
                settings: {
                    data: this.options.data,
                },
            };
        },

        _open: function (e) {
            e.preventDefault();
            $(document).modalWindow('show', this.src, this.options);
        },
    });
});
