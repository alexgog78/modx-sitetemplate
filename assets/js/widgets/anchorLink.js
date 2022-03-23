define([

], function () {
    'use strict';

    $.widget('widgets.anchorLink', $.widgets.abstract, {
        options: {
            animateTime: 400,
            offset: 50,
        },

        _run: function () {
            this.element.on('click.anchorLink', this._click.bind(this));
        },

        _destroy: function () {
            this.element.unbind('click.anchorLink');
        },

        _click: function (e) {
            let $anchor = this._getAnchorElement($(e.target));
            if (!this._checkAnchorElement($anchor)) {
                return;
            }
            e.preventDefault();

            $('html:not(:animated), body:not(:animated)').animate({
                scrollTop: $anchor.offset().top - this.options.offset,
            }, this.options.animateTime);
        },

        _getAnchorElement: function ($element) {
            let anchor = $element.attr('href');
            return $(anchor);
        },

        _checkAnchorElement: function ($element) {
            return !(!$element.length || !$element.is(':visible'));
        },
    });
});
