<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use WP_Query;

class SearchBlock extends Block
{
    public $name = 'Search';
    public $description = 'Search for content.';
    public $category = 'sage';
    public $icon = 'search';
    public $keywords = ['search'];
    public $mode = 'preview';
    public $align = 'wide';
    public $supports = [
        'mode' => false,
    ];
}
