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

  <!-- <p class="byline author vcard">
    <span>{{ __('By', 'sage') }}</span>
    <a href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn">
      {{ get_the_author() }}
    </a>
  </p> -->
</div>
