define([
    'jquery/ui',
], function () {
    'use strict';

    $.widget('widgets.abstract', {
        cssFiles: [],
        options: {},
        loadingClass: 'js-loading',
        cssUrl: requirejs.s.contexts._.config.cssUrl + '/',
        cssUrlArgs: requirejs.s.contexts._.config.urlArgs('', ''),

        _create: function () {
            this._debug([this.element[0], this.options])
            this._addCss();
            this._run();
            this._setLoaded();
            this._super();
        },

        _run: function () {
        },

        _debug: function (data) {
            if (!window.debug) {
                return;
            }
            console.log(this.widgetFullName, data);
        },

        _setLoaded: function () {
            this.element.removeClass(this.loadingClass);
        },

        _addCss: function () {
            let widget = this;
            this.cssFiles.forEach(function (file) {
                widget._addCssLink(file);
            });
        },

        _addCssLink: function (file) {
            let jsSelector = this.namespace + '/' + this.widgetName;
            let cssSelector = 'css/' + file;
            if (document.querySelectorAll('link[data-requiremodule="' + cssSelector + '"]').length) {
                return;
            }

            let preload = document.createElement('link');
            preload.rel = 'preload';
            preload.as = 'style';
            preload.href = this.cssUrl + file + '.css' + this.cssUrlArgs;
            document.getElementsByTagName('head')[0].prepend(preload);

            let widgetLink = document.querySelectorAll('script[data-requiremodule="' + jsSelector + '"]');
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.dataset.requiremodule = cssSelector;
            link.href = this.cssUrl + file + '.css' + this.cssUrlArgs;
            document.getElementsByTagName('head')[0].insertBefore(link, widgetLink[0].nextSibling);
        },
    });
});
