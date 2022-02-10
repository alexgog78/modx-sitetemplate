<?php

class appEventOnLoadWebDocument extends abstractModuleWebEvent
{
    protected function run()
    {
        $this->service->loadWebAssets();
    }
}
