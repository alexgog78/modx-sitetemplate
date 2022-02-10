<?php

class appEventOnMODXInit extends abstractModuleWebEvent
{
    protected function run()
    {
        $this->service->loadLexicon('default');
    }
}
