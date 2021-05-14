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

switch ($modx->event->name) {
    case 'OnMODXInit':
        $modx->lexicon->load('app:default');
        break;
    case 'OnLoadWebDocument':
        $app->loadWebDefaultCssJs();
        break;
    case 'ms2extendOnGetProductLayout':
        /** @var modManagerController $controller */
        $controller->addLexiconTopic('app:product');
        $controller->addJavascript(MODX_ASSETS_URL . 'components/app/minishop2/js/mgr/combo/example.select.js');
        $controller->addJavascript(MODX_ASSETS_URL . 'components/app/minishop2/js/mgr/combo/example.multiselect.js');
        break;
}
return;
