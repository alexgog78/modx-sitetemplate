<?php

$isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
if (!$isAjax) {
    die('Access denied');
}

define('MODX_API_MODE', true);

/**
 * @var modX $modx
 * @noinspection PhpIncludeInspection
 */
require dirname(dirname(dirname(__DIR__))) . '/index.php';

/** @var pdoTools $pdoTools */
$pdoTools = $modx->getService('pdoTools');
