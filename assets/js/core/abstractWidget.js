define([
    'jquery/ui',
], function () {
    'use strict';

    $.widget('widgets.abstract', {
        cssLinks: [],
        options: {},

        _create: function () {
            var widget = this;
            if (window.debug) {
                console.log(widget.widgetFullName, widget.element, widget.options);
            }
            widget.cssLinks.forEach(function (href) {
                widget._addCss(href);
            });
            widget._super();
        },

        _addCss: function (href) {
            var widget = this;
            var urlArgs = requirejs.s.contexts._.config.urlArgs('', '');
            var selector = widget.namespace + '/' + widget.widgetName;
            if (document.querySelectorAll('link[data-requiremodule="' + selector + '"]').length) {
                return;
            }
            var widgetLink = document.querySelectorAll('script[data-requiremodule="' + selector + '"]');
            var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.dataset.requiremodule = selector;
            link.href = href + urlArgs;
            document.getElementsByTagName('head')[0].insertBefore(link, widgetLink[0].nextSibling);
        }
    });
});
