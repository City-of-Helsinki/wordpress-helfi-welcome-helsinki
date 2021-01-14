<div class="entry-meta">
  <time class="updated" datetime="{{ get_post_time('c', true) }}">
    {{ sprintf(__('Updated %s', 'hds'), get_the_date()) }}
  </time>

  @if (get_the_tags())
  <ul class="tags">
    @foreach (get_the_tags() as $tag)
      <li>
        <a href="{!! get_tag_link($tag) !!}">{!! $tag->name !!}</a>
      </li>
    @endforeach
  </ul>
  @endif

  <h3>{{ __('Share post', 'hds') }}</h3>

  <ul class="share">
    <li>
      <a
        class="share-button share-button--facebook"
        href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(get_permalink()) }}"
        target="_blank"
        title="{{ __('Share on Facebook', 'gds') }}"
        rel="nofollow"
      >
        <img class="icon" src="{{ \Roots\Asset('images/fontawesome/facebook-f-brands.svg') }}" />
        <span class="text">Facebook</span>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/intent/tweet?text={{ urlencode(sprintf('%s %s', get_the_title(), get_permalink())) }}"
        target="_blank"
        title="{{ __('Share on Twitter', 'hds') }}"
        aria-label="{{ __('Share on Twitter', 'hds') }}"
        role="button"
        rel="nofollow"
      >
        <img class="icon" src="{{ \Roots\Asset('images/fontawesome/twitter-brands.svg') }}" />
        <span class="text">Twitter</span>
      </a>
    </li>
  </div>

</div>
