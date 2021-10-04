<div class="site-header">
  <a class="site-header__logo" href="{{ home_url('/') }}" rel="home" aria-label="{{ __('Go to frontpage', 'welcome.helsinki') }}">
    @if (mb_substr(get_locale(), 0, 2) === 'sv')
      @svg('images/logo/helsinki-sv.svg', '', ['width' => 67, 'height' => 31])
    @else
      @svg('images/logo/helsinki-fi.svg', '', ['width' => 67, 'height' => 31])
    @endif
  </a>

  <div class="site-header__name">
    <p>{{ $site_name }}</p>
  </div>

  <div class="site-header__search site-header__search--desktop">
    @include('partials.search')
  </div>

  <div class="site-header__languages">
    @include('partials.languages')
  </div>

  <div class="site-header__hamburger-button">
    <button
      class="site-hamburger-button"
      aria-label="{{ __('Navigation', 'welcome.helsinki') }}"
      aria-expanded="false"
      aria-controls="header"
    >
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div class="site-header__search site-header__search--mobile">
    @include('partials.search')
  </div>
</div>

<nav class="site-navbar">
  @include('partials.navigation')
</nav>

<nav class="site-mobile-languages">
  <ul class="site-mobile-languages__menu" role="menu">
    @foreach ($language_navigation as $item)
      @include('partials.menu-item', ['item' => $item, 'name' => 'site-mobile-languages'])
    @endforeach
  </ul>
</nav>
