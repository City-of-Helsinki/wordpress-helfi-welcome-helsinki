<?php

namespace App\Blocks;

use Genero\Sage\NativeBlock\NativeBlock;

class QuestionAndAnswer extends NativeBlock
{
    public $name = 'hds/question-and-answer';

    public function with()
    {
        return [
            'style' => $this->attributes->style,
            'question' => $this->attributes->question,
        ];
    }
}
