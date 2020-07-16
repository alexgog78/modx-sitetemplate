{set $assetsVersion = $_modx->getPlaceholder('+dev_mode') ? ('' | date : 'U') : $_modx->getPlaceholder('+assets_version')}
<!DOCTYPE html>
<html lang="{$_modx->config.cultureKey}">
<head>
    <meta charset="{$_modx->config.modx_charset}">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="{$_modx->config.site_url}">
    <title>{$_modx->resource.metaTitle}</title>
    <meta name="keywords" content="{$_modx->resource.metaKeywords}">
    <meta name="description" content="{$_modx->resource.metaDescription}">

    <link href="./assets/images/favicon.ico?v={$assetsVersion}" rel="shortcut icon">
    <link href="./assets/images/favicon.png?v={$assetsVersion}" rel="icon" type="image/png">

    <link href="./assets/css/fonts.css?v={$assetsVersion}" rel="stylesheet">
    <link href="./assets/css/styles.css?v={$assetsVersion}" rel="stylesheet">

    <script src="./assets/js/requirejs-config.js?v={$assetsVersion}"></script>
    <script src="./assets/js/core/require.js?v={$assetsVersion}"></script>
    <script>
        window.debug = {$_modx->getPlaceholder('+dev_mode') ? 'true' : 'false'};
        requirejs.config({
            urlArgs: 'v={$assetsVersion}'
        });
        require(['main']);
    </script>
    <script type="text/x-init">
        {[
            '*' => [
                'anchorLinks' => [],
            ],
        ] | toJSON}
    </script>
</head>
<body class="page page--resource-{$_modx->resource.id}">
    <header class="page__header header">

    </header>

    <main class="page__main">
        {block 'content'}{/block}
    </main>

    <footer class="page__footer header">

    </footer>

    {if $_modx->getPlaceholder('+dev_mode')}
        <div class="debug">
            <table>
                <tr>
                    <td>Количество запросов к БД:</td>
                    <td>{$_modx->getInfo('queries')}</td>
                </tr>
                <tr>
                    <td>Время запросов к БД:</td>
                    <td>{$_modx->getInfo('queryTime')}</td>
                </tr>
                <tr>
                    <td>Время работы PHP скриптов:</td>
                    <td>{$_modx->getInfo('phpTime')}</td>
                </tr>
                <tr>
                    <td>Общее время генерации страницы:</td>
                    <td>{$_modx->getInfo('totalTime')}</td>
                </tr>
                <tr>
                    <td>Источник содержимого:</td>
                    <td>{$_modx->getInfo('source')}</td>
                </tr>
            </table>
        </div>
    {/if}
</body>
</html>
