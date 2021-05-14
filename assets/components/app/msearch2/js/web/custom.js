require({
    paths: {
        'mSearch2': '/assets/components/msearch2/js/web/default',
    },
    shim: {
        'mSearch2': {
            deps: ['jquery'],
        },
    }
}, [
    'jquery',
    'mSearch2',
    'domReady!',
], function ($) {
    'use strict';

    if (window.location.hash != '' && mSearch2.Hash.oldbrowser()) {
        var uri = window.location.hash.replace('#', '?');
        window.location.href = document.location.pathname + uri;
    } else {
        mSearch2.initialize('body');
    }

    $(document).on('mse2_load', function (e, data) {
        $.init.initialize();
    });
});
