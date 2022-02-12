define([
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.scrollTopLink', $.widgets.abstract, {
        options: {
            topOffset: 300,
            animateTime: 400,
        },

        _run: function () {
            this._toggleLink();
            $(window).scroll(this._toggleLink.bind(this));
            this.element.on('click.scrollTopLink', this._scrollTop.bind(this));
        },

        _destroy: function () {
            this.element.unbind('click.scrollTopLink');
        },

        _toggleLink: function () {
            window.scrollY > this.options.topOffset ? this.element.stop(true, true).animate({
                opacity: 1
            }) : this.element.stop(true, true).animate({
                opacity: 0
            });
        },

        _scrollTop: function (e) {
            e.preventDefault();
            $('html:not(:animated), body:not(:animated)').animate({
                scrollTop: 0
            }, this.options.animateTime);
        },
    });
});
