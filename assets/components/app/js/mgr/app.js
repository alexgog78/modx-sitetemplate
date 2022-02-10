'use strict';

var App = function (config) {
    config = config || {};
    App.superclass.constructor.call(this, config);
};
Ext.extend(App, Ext.Component, abstractModule);
Ext.reg('app', App);
App = new App();
