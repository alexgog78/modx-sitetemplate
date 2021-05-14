<?php

return [
    'fields' => [
        'app_field_boolean' => 0,
        'app_field_int' => 0,
        'app_field_decimal' => 0,
        'app_field_varchar' => NULL,
        'app_field_text' => NULL,
        'app_field_json' => NULL,
    ],
    'fieldMeta' => [
        'app_field_boolean' => [
            'dbtype' => 'tinyint',
            'precision' => '1',
            'attributes' => 'unsigned',
            'phptype' => 'boolean',
            'default' => 0,
        ],
        'app_field_int' => [
            'dbtype' => 'int',
            'precision' => '10',
            'phptype' => 'integer',
            'default' => 0,
        ],
        'app_field_decimal' => [
            'dbtype' => 'decimal',
            'precision' => '12,2',
            'phptype' => 'float',
            'default' => 0,
        ],
        'app_field_varchar' => [
            'dbtype' => 'varchar',
            'precision' => '255',
            'phptype' => 'string',
            'null' => true,
        ],
        'app_field_text' => [
            'dbtype' => 'text',
            'phptype' => 'string',
            'null' => true,
        ],
        'app_field_json' => [
            'dbtype' => 'text',
            'phptype' => 'json',
            'null' => true,
        ],
    ],
    'indexes' => [
        'app_field_boolean' => [
            'alias' => 'app_field_boolean',
            'primary' => false,
            'unique' => false,
            'type' => 'BTREE',
            'columns' => [
                'app_field_boolean' => [
                    'length' => '',
                    'collation' => 'A',
                    'null' => false,
                ],
            ],
        ],
        'app_field_int' => [
            'alias' => 'app_field_int',
            'primary' => false,
            'unique' => false,
            'type' => 'BTREE',
            'columns' => [
                'app_field_int' => [
                    'length' => '',
                    'collation' => 'A',
                    'null' => false,
                ],
            ],
        ],
    ],
    'composites' => [],
    'aggregates' => [],
];
