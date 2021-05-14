define([
    'mediaCheck',
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.mediaWidget', $.widgets.abstract, {
        options: {
            media: null,
            widget: null,
        },

        _run: function () {
            let _this = this;
            require([
                requirejs.s.contexts._.config.widgetsUrl + '/' + _this.options.widget,
            ], function () {
                _this._debug([_this.element[0], 'bind "' + _this.options.widget + '" for ' + _this.options.media]);
                mediaCheck({
                    media: _this.options.media,
                    entry: function () {
                        let instance = _this.element[_this.options.widget]('instance');
                        if (!instance) {
                            _this._debug([_this.element[0], 'create ' + _this.options.widget]);
                            _this.element[_this.options.widget](_this.options);
                        }
                    },
                    exit: function () {
                        let instance = _this.element[_this.options.widget]('instance');
                        if (instance) {
                            _this._debug([_this.element[0], 'destroy ' + _this.options.widget]);
                            _this.element[_this.options.widget]('destroy');
                        }
                    },
                });
            });
        },
    });
});
