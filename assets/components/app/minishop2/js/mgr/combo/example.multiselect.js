'use strict';

App.combo.multiselect = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        store: new Ext.data.SimpleStore({
            id: (config.name || 'app-combo-multiselect') + '-store',
            fields: ['value', 'title'],
            data: [
                [1, 'Value 1'],
                [2, 'Value 2'],
            ]
        }),
        displayField: 'title',
        valueField: 'value'
    });
    App.combo.multiselect.superclass.constructor.call(this, config);
};
Ext.extend(App.combo.multiselect, App.combo.multiSelect.local.abstract);
Ext.reg('app-combo-multiselect', App.combo.multiselect);


App.combo.multiselect = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        store: new Ext.data.JsonStore({
            id: (config.id || 'app-combo-multiselect') + '-store',
            url: App.config.connectorUrl,
            baseParams: {
                action: 'mgr/getlist',
                combo: 1,
            },
            fields: ['id', 'name'],
            root: 'results',
            totalProperty: 'total',
            autoLoad: false,
            autoSave: false,
        }),
        displayField: 'name',
        valueField: 'id',
    });
    App.combo.multiselect.superclass.constructor.call(this, config);
};
Ext.extend(App.combo.multiselect, App.combo.multiSelect.remote.abstract);
Ext.reg('app-combo-multiselect', App.combo.multiselect);
