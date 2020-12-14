<div class="wp-block-hds-search">
  <div class="wp-block-hds-search__heading">
    {{ __('What are you looking for?', 'welcome.helsinki') }}
  </div>
  <form action="{{ home_url('/') }}" method="get" role="search">
    <input
      type="search"
      name="s"
      placeholder="{{ __('Search', 'welcome.helsinki') }}"
    />

    <button type="submit">
      @svg('images/icons/search.svg', '', ['width' => 24, 'height' => 24])
      <span class="sr-only">{{ __('Search', 'welcome.helsinki') }}</span>
    </button>
  </form>
</div>
