'use strict';

miniShop2.plugin.appProduct = {
    //Product form
    getFields: function (config) {
        //Default values
        if (config.record.app_field_boolean === undefined) {
            config.record.app_field_boolean = 1;
        }

        return {
            app_field_boolean: {xtype: 'xcheckbox', fieldLabel: _('app_product_field_boolean')},
            app_field_int: {xtype: 'app-combo-select', fieldLabel: _('app_product_field_int')},
            app_field_decimal: {xtype: 'numberfield', decimalPrecision: 2, fieldLabel: _('app_product_field_decimal')},
            app_field_varchar: {xtype: 'textfield', fieldLabel: _('app_product_field_varchar')},
            app_field_text: {xtype: 'textarea', fieldLabel: _('app_product_field_text')},
            app_field_json: {xtype: 'app-combo-multiselect', fieldLabel: _('app_product_field_json')},
        }
    },

    //Products grid
    getColumns: function () {
        return {
            app_field_boolean: {sortable: true, editor: {xtype: 'combo-boolean', name: 'app_field_boolean', renderer: 'boolean'}},
            app_field_int: {sortable: true},
            app_field_decimal: {sortable: true, decimalPrecision: 2, editor: {xtype: 'numberfield', name: 'app_field_decimal'}},
            app_field_varchar: {sortable: true, editor: {xtype: 'textfield', name: 'app_field_varchar'}},
            app_field_text: {sortable: false, editor: {xtype: 'textarea', name: 'app_field_text'}},
            app_field_json: {sortable: false},
        }
    }
};
