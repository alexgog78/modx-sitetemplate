{set $_modx->config.assets_version = $_modx->getPlaceholder('+dev_mode') ? ('' | date : 'U') : $_modx->getPlaceholder('+assets_version')}
<!DOCTYPE html>
<html class="page page--resource-{$_modx->resource.id}" lang="{$_modx->config.cultureKey}">
<head>
    <meta charset="{$_modx->config.modx_charset}">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="{$_modx->config.site_url}">
    <title>{$_modx->resource.meta_title}</title>
    <meta name="keywords" content="{$_modx->resource.meta_keywords}">
    <meta name="description" content="{$_modx->resource.meta_description}">

    <link rel="preload" href="{$_modx->config.assets_url}css/styles.css?v={$_modx->config.assets_version}" as="style">
    <link rel="preload" href="{$_modx->config.assets_url}js/core/require.js?v={$_modx->config.assets_version}" as="script">

    <link href="{$_modx->config.assets_url}images/favicon.png?v={$_modx->config.assets_version}" rel="icon" type="image/png">
    <link href="{$_modx->config.assets_url}css/styles.css?v={$_modx->config.assets_version}" rel="stylesheet">

    <script src="{$_modx->config.assets_url}js/requirejs-config.js?v={$_modx->config.assets_version}"></script>
    <script src="{$_modx->config.assets_url}js/core/require.js?v={$_modx->config.assets_version}"></script>
    <script>
        'use strict';
        window.debug = {$_modx->getPlaceholder('+dev_mode') ? 'true' : 'false'};
        require.config({
            urlArgs: 'v={$_modx->config.assets_version}',
            baseUrl: '{$_modx->config.assets_url}js',
            cssUrl: '{$_modx->config.assets_url}css',
        });
        require([
            'jquery',
            'jquery/ui',
            'abstractWidget',
            'init',
        ], function ($) {
            $.init.initialize();
        });
    </script>
    <script type="text/x-init">
        {
            "*": {
                "notification": [],
                "modalWindow": [],
                "cookieAccept": []
            },
            "a[href^=\"#\"]": {
                "anchorLink": []
            },
            "[type=\"tel\"]": {
                "inputTel": []
            }
        }
    </script>
</head>
<body class="page__body">
    {include 'file:chunks/header.tpl'}
    {include 'file:chunks/breadcrumbs.tpl'}

    <main class="page__main">
        {block 'content'}{/block}
    </main>

    {include 'file:chunks/footer.tpl'}

    {include 'file:chunks/debug.tpl'}
</body>
</html>
