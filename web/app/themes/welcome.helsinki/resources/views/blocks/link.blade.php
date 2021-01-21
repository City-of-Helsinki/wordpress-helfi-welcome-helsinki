<a
  class="hds-link @if ($isCompact) compact @endif"
  href="{{ $url }}"
  @if ($isExternal)
    target="_blank"
  @endif
>
  <div class="
    hds-link__icon
    hds-icon
    @if ($isExternal)
      hds-icon--link-external
      hds-link__icon--external
    @else
      hds-icon--arrow-right
      hds-link__icon--internal
    @endif
  "></div>
  {!! wp_kses_post($text) !!}
</a>
