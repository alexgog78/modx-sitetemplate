'use strict';

Ext.namespace('Dev.combo');

Dev.combo.multiselect = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        store: new Ext.data.SimpleStore({
            id: (config.name || 'dev-combo-multiselect') + '-store',
            fields: ['value', 'title'],
            data: [
                [1, 'Value 1'],
                [2, 'Value 2'],
            ]
        }),
        displayField: 'title',
        valueField: 'value'
    });
    Dev.combo.multiselect.superclass.constructor.call(this, config);
};
Ext.extend(Dev.combo.multiselect, ms2Extend.combo.multiSelect.local.abstract);
Ext.reg('dev-combo-multiselect', Dev.combo.multiselect);
