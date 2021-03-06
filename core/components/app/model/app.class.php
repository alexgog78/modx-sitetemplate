<?php

$this->loadClass('abstractModule', MODX_CORE_PATH . 'components/abstractmodule/model/', true, true);

class App extends abstractModule
{
    const PKG_VERSION = '1.0.0';
    const PKG_RELEASE = 'pl';
    const PKG_NAME = 'App';
    const PKG_NAMESPACE = 'app';
    const TABLE_PREFIX = 'app_';

    /** @var bool */
    protected $loadPackage = false;

    /**
     * @return array
     */
    protected function getWebDefaultAssetsConfig()
    {
        $config = parent::getWebDefaultAssetsConfig();
        return array_merge($config, [
            'actionsUrl' => $this->assetsUrl . 'actions/',
            'resourceId' => $this->modx->resource->get('id'),
        ]);
    }
}
