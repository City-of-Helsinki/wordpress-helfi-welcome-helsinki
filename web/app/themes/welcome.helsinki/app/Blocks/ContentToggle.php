<?php

namespace App\Blocks;

use Genero\Sage\NativeBlock\NativeBlock;

class ContentToggle extends NativeBlock
{
    public $name = 'hds/content-toggle';

    public function with()
    {
        return [
            'text' => $this->attributes->text,
            'id' => uniqid()
        ];
    }
}
