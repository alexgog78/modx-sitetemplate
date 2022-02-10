<?php

/**
 * @var modX $modx
 * @var array $scriptProperties
 */

/** @var App $app */
$app = $modx->getService('app', 'App', MODX_CORE_PATH . 'components/app/model/');
if (!($app instanceof App)) {
    exit('Could not load App');
}
$modxEvent = $modx->event->name;
$app->handleEvent($modxEvent, $scriptProperties);
return;
