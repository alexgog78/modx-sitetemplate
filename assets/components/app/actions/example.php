<?php

/**
 * @var modX $modx
 * @var pdoTools $pdoTools
 */
require_once dirname(__DIR__) . '/action.php';

$pageId = $_GET['page'];
$modx->resource = $modx->getObject('modDocument', [
    'id' => $pageId,
]);

$response = $pdoTools->getChunk($_GET['tpl'], [
    'modal' => true,
]);
exit($response);
