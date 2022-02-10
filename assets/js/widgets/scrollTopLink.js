define([
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.scrollTopLink', $.widgets.abstract, {
        options: {
            animateTime: 400,
        },

        _run: function () {
            let widget = this;

            this._toggleLink();
            $(window).scroll(function () {
                widget._toggleLink();
            });

            this.element.on('click', function (e) {
                e.preventDefault();
                $('html:not(:animated),body:not(:animated)').animate({
                    scrollTop: 0
                }, widget.options.animateTime);
            });
        },

        _toggleLink: function () {
            window.scrollY > 300 ? this.element.stop(true, true).animate({
                opacity: 1
            }) : this.element.stop(true, true).animate({
                opacity: 0
            });
        },
    });
});
