<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;

class FirstStepsChecklist extends Block
{
  public $name = 'First Steps Checklist';
  public $description = 'Embed First Steps Checklist application.';
  public $category = 'sage';
  public $icon = 'yes';
  public $mode = 'preview';
  public $align = 'full';
  public $supports = [
    'mode' => false,
    'align' => true,
  ];

  public function with()
  {
      return [
      ];
  }
}
