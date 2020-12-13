<?php

namespace App\Blocks;

use Genero\Sage\NativeBlock\NativeBlock;

class LinkList extends NativeBlock
{
    public $name = 'hds/link-list';

    public function with()
    {
        return [
            'heading' => $this->attributes->heading,
            'links' => json_decode($this->attributes->links),
            'backgroundColor' => $this->attributes->backgroundColor,
            'textColor' => $this->attributes->textColor,
            'compact' => $this->attributes->compact,
        ];
    }
}
