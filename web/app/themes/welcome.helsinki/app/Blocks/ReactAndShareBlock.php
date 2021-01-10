<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use WP_Query;

class ReactAndShareBlock extends Block
{
    public $name = 'React & Share';
    public $description = 'Add React & Share buttons.';
    public $category = 'sage';
    public $icon = 'admin-comments';
    public $keywords = ['comments'];
    public $mode = 'preview';
    public $align = 'wide';
    public $supports = [
        'mode' => false,
    ];
}
