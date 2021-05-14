<?php

$this->loadClass('abstractModule', MODX_CORE_PATH . 'components/abstractmodule/model/', true, true);

class App extends abstractModule
{
    const PKG_VERSION = '1.0.0';
    const PKG_RELEASE = 'pl';
    const PKG_NAMESPACE = 'app';
    const TABLE_PREFIX = 'app_';

    /** @var bool */
    protected $loadPackage = false;

    /**
     * @return array
     */
    public function getWebConfig()
    {
        return [
            'cssUrl' => $this->cssUrl,
            'jsUrl' => $this->jsUrl,
            'actionsUrl' => $this->assetsUrl . 'actions/',
            'actionKey' => $this->actionKey,
            'resourceId' => $this->modx->resource->get('id'),
        ];
    }
}
