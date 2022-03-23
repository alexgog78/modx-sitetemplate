define([
    'underscore',
    'jquery',
    'jquery/ui',
    'abstractWidget',
    'domReady!',
], function (_, $) {
    'use strict';

    $.init = $.init || {
        scriptSelector: 'script[type="text/x-init"]',
        dataAttr: 'data-init',
        elements: [],

        initialize: function () {
            var _this = this;
            _this.processScriptTags();
            _this.processDataAttrs();
            _this.applyWidgets();
        },

        processScriptTags: function () {
            var _this = this;
            var scriptTags = document.querySelectorAll(_this.scriptSelector);
            _.toArray(scriptTags)
                .map(_this.getScriptTagData)
                .forEach(function (scriptTagElement) {
                    _.each(scriptTagElement, _this.processScriptTagElement, _this);
                });
        },

        processDataAttrs: function () {
            var _this = this;
            var nodes = document.querySelectorAll('[' + _this.dataAttr + ']');
            _.each(_.toArray(nodes), function (element) {
                _this.getDataAttr(element);
            });
        },

        applyWidgets: function () {
            var _this = this;
            _.each(_this.elements, function (elementData) {
                _.each(elementData.data, function (config, widget) {
                    _this.apply(elementData.element, widget, config);
                });
            });
        },

        getScriptTagData: function (scriptTag) {
            var data = scriptTag.textContent;
            scriptTag.parentNode.removeChild(scriptTag);
            return JSON.parse(data);
        },

        processScriptTagElement: function (components, selector) {
            var _this = this;
            var elems,
                iterator;

            if (selector === '*') {
                _this.addElement(false, components);
                return;
            }

            elems = document.querySelectorAll(selector);
            iterator = _this.setDataAttr.bind(null, components);

            _.toArray(elems).forEach(iterator);
        },

        setDataAttr: function (components, elem) {
            var data = elem.getAttribute($.init.dataAttr);
            data = data ? JSON.parse(data) : {};
            _.each(components, function (obj, key) {
                if (_.has(obj, 'mixins')) {
                    data[key] = data[key] || {};
                    data[key].mixins = data[key].mixins || [];
                    data[key].mixins = data[key].mixins.concat(obj.mixins);
                    delete obj.mixins;
                }
            });
            data = $.extend(true, data, components);
            data = JSON.stringify(data);
            elem.setAttribute($.init.dataAttr, data);
        },

        getDataAttr: function (element) {
            var _this = this;
            var data = element.getAttribute(_this.dataAttr);
            element.removeAttribute(_this.dataAttr);
            _this.addElement(element, JSON.parse(data));
        },

        addElement: function (element, components) {
            var _this = this;
            _this.elements.push({
                element: element,
                data: components
            });
        },

        apply: function (element, widget, config) {
            if (!element) {
                element = document;
            }
            require([requirejs.s.contexts._.config.widgetsUrl + '/' + widget], function (fn) {
                if (typeof fn === 'object') {
                    fn = fn[widget].bind(fn);
                }
                if (_.isFunction(fn)) {
                    fn(config, element);
                } else if ($(element)[widget]) {
                    $(element)[widget](config);
                }
            });
        }
    };
});
