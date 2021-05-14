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
