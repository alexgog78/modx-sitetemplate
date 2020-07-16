define([
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.anchorLinks', $.widgets.abstract, {
        options: {
            linkElement: 'a[href^="#"]',
            animateTime: 400
        },

        _create: function () {
            var widget = this;
            widget._super();
            widget.element.find(widget.options.linkElement).on('click', function (e) {
                var $anchor = widget.getAnchorElement($(this));
                if (!$anchor.length || !$anchor.is(':visible')) {
                    return;
                }

                e.preventDefault();
                $('html:not(:animated), body:not(:animated)').animate(
                    {scrollTop: $anchor.offset().top},
                    widget.options.animateTime
                );
            });
        },

        getAnchorElement: function ($link) {
            var anchor = $link.attr('href');
            var $anchor = $(anchor);
            if (!$anchor.length) {
                return false;
            }
            return $anchor;
        }
    });
});
