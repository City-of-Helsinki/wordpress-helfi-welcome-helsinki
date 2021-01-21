<?php

namespace App\Blocks;

use Genero\Sage\NativeBlock\NativeBlock;

class Link extends NativeBlock
{
    public $name = 'hds/link';

    public function with()
    {
        return [
            'text' => $this->attributes->text,
            'url' => $this->attributes->url,
            'isExternal' => $this->attributes->isExternal,
            'isCompact' => $this->attributes->isCompact,
        ];
    }
}
