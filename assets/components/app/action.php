<?php

$isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
if (!$isAjax) {
    die('Access denied');
}

define('MODX_API_MODE', true);

/**
 * @var modX $modx
 * @var App $app
 * @var pdoTools $pdoTools
 * @noinspection PhpIncludeInspection
 */
require dirname(dirname(dirname(__DIR__))) . '/index.php';
$app = $modx->getService('app', 'App', MODX_CORE_PATH . 'components/app/model/');
$pdoTools = $modx->getService('pdoTools');
