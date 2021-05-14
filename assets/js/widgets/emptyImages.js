define([
    'abstractWidget',
    'domReady!'
], function () {
    'use strict';

    $.widget('widgets.emptyImages', $.widgets.abstract, {
        options: {
            stub: './assets/images/no-photo.png'
        },

        _run: function () {
            var widget = this;
            this.element.find('img').each(function () {
                if (this.complete && this.naturalWidth != 0) {
                    return;
                }
                $(this).attr('src', widget.options.stub);
            });
        }
    });
});
