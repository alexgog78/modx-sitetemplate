<?php

class appEventms2extendOnGetProductTabs extends abstractModuleMgrEvent
{
    protected function run()
    {
        /** @var modManagerController $controller */
        $controller = $this->scriptProperties['controller'];

        $controller->addLexiconTopic('app:product');
        $controller->addJavascript(MODX_ASSETS_URL . 'components/app/minishop2/js/mgr/combo/example.select.js');
        $controller->addJavascript(MODX_ASSETS_URL . 'components/app/minishop2/js/mgr/combo/example.multiselect.js');
    }
}
