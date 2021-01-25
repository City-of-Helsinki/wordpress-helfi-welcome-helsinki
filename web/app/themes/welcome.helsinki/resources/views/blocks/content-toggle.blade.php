<div class="{{ esc_attr($block->classes) }}">
  <div class="wp-block-hds-content-toggle__toggle content-toggle">
    <div class="wp-block-hds-content-toggle__text">
      {{ $text }}
    </div>
    <div class="wp-block-hds-content-toggle__icon hds-icon hds-icon--angle-down">
    </div>
  </div>
  <div class="wp-block-hds-content-toggle__content">
    {!! $content !!}
  </div>
</div>
