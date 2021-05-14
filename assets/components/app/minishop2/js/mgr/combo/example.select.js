'use strict';

Ext.namespace('App.combo');

App.combo.select = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        store: [
            [0, _('no')],
            [1, _('yes')],
        ],
        fields: ['value', 'title'],
        displayField: 'title',
        valueField: 'value'
    });
    App.combo.select.superclass.constructor.call(this, config);
};
Ext.extend(App.combo.select, ms2Extend.combo.select.local.abstract);
Ext.reg('app-combo-select', App.combo.select);
