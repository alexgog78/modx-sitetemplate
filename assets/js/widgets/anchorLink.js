define([
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.anchorLink', $.widgets.abstract, {
        options: {
            animateTime: 400,
        },

        _run: function () {
            var widget = this;
            this.element.on('click', function (e) {
                let $anchor = widget._getAnchorElement($(this));
                if (!$anchor.length || !$anchor.is(':visible')) {
                    return;
                }
                e.preventDefault();
                $('html:not(:animated), body:not(:animated)').animate(
                    {scrollTop: $anchor.offset().top - 50},
                    widget.options.animateTime
                );
            });
        },

        _getAnchorElement: function ($link) {
            var anchor = $link.attr('href');
            var $anchor = $(anchor);
            if (!$anchor.length) {
                return false;
            }
            return $anchor;
        },
    });
});
