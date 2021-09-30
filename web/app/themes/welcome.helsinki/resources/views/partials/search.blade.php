<form action="{{ home_url('/') }}" method="get" role="search" class="site-search">
  <input class="site-search__field" type="search" name="s" placeholder="{{ __('Search', 'welcome.helsinki') }}" data-swplive="true" />

  <button class="site-search__button" type="submit" role="button">
    @svg('images/icons/search.svg', '', ['width' => 24, 'height' => 24, 'aria-hidden' => 'true'])
    <span class="sr-only">{{ __('Search', 'welcome.helsinki') }}</span>
  </button>
</form>
