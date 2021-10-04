@php $level = $level ?? 1 @endphp
<li class="
  {{ $name }}__item
  {{ $item->classes ?? '' }}
  {{ ($item->active || $item->activeAncestor) ? 'is-active': '' }}
  {{ $item->children ? 'has-children' : '' }}
  {{ "is-level-$level" }}"
>
  <a
    href="{{ $item->url }}"
    target="{{ $item->target ?? '' }}"
    title="{{ $item->title ?? '' }}"
    class="{{ $name }}__link {{ ($item->active || $item->activeAncestor) ? 'is-active': '' }}"
    aria-label="{{ esc_attr($label ?? $item->label) }}"
  >
    {!! esc_html($item->label) !!}

  </a>
  @if ($item->children)
    <button
      class="{{ $name }}__submenu-trigger"
      aria-label="{{ sprintf(__('%s submenu', 'welcome.helsinki'), $label ?? $item->label) }}"
      aria-controls="submenu-{{ $item->slug }}"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span
        class="hds-icon hds-icon--angle-down"
        aria-hidden="true"
      ></span>
    </button>
  @endif

  @if ($item->children)
    <ul
      id="submenu-{{ $item->slug }}" class="{{ $name }}__submenu"
      aria-label="{!! esc_attr($item->label) !!}"
    >
      @foreach ($item->children as $child)
        @include('partials.menu-item', ['item' => $child, 'name' => $name, 'level' => $level + 1])
      @endforeach
    </ul>
  @endif
</li>
