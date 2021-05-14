define([
    'miniShop2',
    'widgets/notification',
], function () {
    'use strict';

    miniShop2.Message.success = function (message) {
        if (!message.length) {
            return;
        }
        $(document).notification('success', message);
    };
    miniShop2.Message.error = function (message) {
        if (!message.length) {
            return;
        }
        $(document).notification('error', message);
    };
    miniShop2.Message.info = function (message) {
        if (!message.length) {
            return;
        }
        $(document).notification('info', message);
    };
});
