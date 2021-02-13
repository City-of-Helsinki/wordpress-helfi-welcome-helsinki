<div class="{{ esc_attr($block->classes) }}">
  <button class="wp-block-hds-content-toggle__toggle content-toggle" aria-controls="accordion-{{ $id }}">
    <div class="wp-block-hds-content-toggle__text">
      {{ $text }}
    </div>
    <div class="wp-block-hds-content-toggle__icon hds-icon hds-icon--angle-down">
    </div>
  </button>
  <section class="wp-block-hds-content-toggle__content" id="accordion-{{ $id }}">
    {!! $content !!}
  </section>
</div>
