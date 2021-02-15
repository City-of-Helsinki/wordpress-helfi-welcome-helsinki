<div
  class="{{ esc_attr($block->classes) }} is-style-{{ $style }}"
  itemscope
  itemprop="mainEntity"
  itemtype="https://schema.org/Question"
>
  <span
    class="wp-block-hds-question-and-answer__question"
    itemprop="name"
  >
    {{ $question }}
  </span>
  <span
    class="wp-block-hds-question-and-answer__answer"
    itemscope
    itemprop="acceptedAnswer"
    itemtype="https://schema.org/Answer"
  >
    <span itemprop="text">
      {!! $content !!}
    </span>
  </span>
</div>
