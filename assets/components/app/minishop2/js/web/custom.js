require({
    paths: {
        'miniShop2': '/assets/components/minishop2/js/web/default',
    },
    shim: {
        'miniShop2': {
            deps: ['jquery'],
        },
    }
}, [
    'jquery',
    'miniShop2',
    '/assets/components/app/minishop2/js/web/handlers/message.js',
], function ($) {
    'use strict';

});
