{if $_modx->getPlaceholder('+dev_mode') && $_modx->hasSessionContext('mgr')}
    {set $info = $_modx->getInfo('', false)}
    <div class="page-debug">
        <table>
            <tr>
                <td>Ресурс:</td>
                <td><a href="{$_modx->config.manager_url}?a=resource/update&id={$_modx->resource.id}" target="_blank">{$_modx->resource.id}</a></td>
            </tr>
            <tr>
                <td>Пользователь:</td>
                <td>{$_modx->user.id}</td>
            </tr>
            <tr>
                <td>Количество запросов к БД:</td>
                <td>{$info.queries}</td>
            </tr>
            <tr>
                <td>Время запросов к БД:</td>
                <td>{$info.queryTime}</td>
            </tr>
            <tr>
                <td>Время работы PHP скриптов:</td>
                <td>{$info.phpTime}</td>
            </tr>
            <tr>
                <td>Общее время генерации страницы:</td>
                <td>{$info.totalTime}</td>
            </tr>
            <tr>
                <td>Источник содержимого:</td>
                <td>{$info.source}</td>
            </tr>
        </table>
    </div>
{/if}
