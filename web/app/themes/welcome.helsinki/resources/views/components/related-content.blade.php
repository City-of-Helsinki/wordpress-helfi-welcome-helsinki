@if ($query->have_posts())
  <div class="wp-block-group alignfull related-content has-background">
    <div class="wp-block-group__inner-container">
      <div class="{{ esc_attr($block->classes) }} alignwide" @if ($block->id || $use_pagination) id="{{ $block->id ?? 'listing' }}" @endif>
        @if($label)
          <h2 class="related-content__title">{{$label}}</h2>
        @endif

        <div class="grid">
          @while ($query->have_posts()) @php($query->the_post())
          <div class="cell xsmall:6 small:6 medium:8 large:6">
            @includeFirst(['teasers.' . get_post_type(), 'teasers.teaser'], ['post' => get_post(), 'largethumbnail' => 'qetqte'])
          </div>
          @endwhile
          @php(wp_reset_postdata())
        </div>
      </div>
    </div>
  </div>
@endif
