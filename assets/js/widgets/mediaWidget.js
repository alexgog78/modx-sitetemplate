define([
    'mediaCheck',
], function () {
    'use strict';

    $.widget('widgets.mediaWidget', $.widgets.abstract, {
        options: {
            media: null,
            widget: null,
        },

        _run: function () {
            this.element['widgets.mediaWidget'] = true;
            require([
                requirejs.s.contexts._.config.widgetsUrl + '/' + this.options.widget,
            ], this._bindWidget.bind(this));
        },

        _destroy: function () {
            this._exitMedia();
            this.element['widgets.mediaWidget'] = false;
        },

        _bindWidget: function () {
            this._debug([this.element[0], 'bind "' + this.options.widget + '" for ' + this.options.media]);
            mediaCheck({
                media: this.options.media,
                entry: this._entryMedia.bind(this),
                exit: this._exitMedia.bind(this),
            });
        },

        _entryMedia: function () {
            let instance = this._getWidgetInstance(this.options.widget);
            if (!instance && this.element['widgets.mediaWidget']) {
                this._runWidget();
            }
        },

        _exitMedia: function () {
            let instance = this._getWidgetInstance();
            if (instance && this.element['widgets.mediaWidget']) {
                this._destroyWidget();
            }
        },

        _getWidgetInstance: function () {
            return this.element[this.options.widget]('instance');
        },

        _runWidget: function () {
            this._debug([this.element[0], 'create ' + this.options.widget]);
            this.element[this.options.widget](this.options);
        },

        _destroyWidget: function () {
            this._debug([this.element[0], 'destroy ' + this.options.widget]);
            this.element[this.options.widget]('destroy');
        },
    });
});
