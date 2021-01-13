<div class="{{ esc_attr($block->classes) }} @if ($compact) compact @endif">
  @if ($heading)
    <h2 class="wp-block-hds-link-list__heading has-{!! $textColor !!}-color">
      {!! wp_kses_post($heading) !!}
    </h2>
  @endif
  <ul>
    @foreach ($links as $link)
      @if ($link->text && $link->url)
        <li>
          <a
            class="wp-block-hds-link-list__link has-{!! $textColor !!}-color"
            href="{{ $link->url }}"
            @if ($link->isExternal)
              target="_blank"
            @endif
          >
            <div class="
              wp-block-hds-link-list__icon
              hds-icon
              @if ($link->isExternal)
                hds-icon--link-external
                wp-block-hds-link-list__icon--external
              @else
                hds-icon--arrow-right
                wp-block-hds-link-list__icon--internal
              @endif
            "></div>
            {!! wp_kses_post($link->text) !!}
          </a>
        </li>
      @endif
    @endforeach
  </ul>
</div>
