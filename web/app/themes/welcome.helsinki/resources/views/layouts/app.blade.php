<div class="site">
  <a
    class="site__skip-to-content"
    href="#main"
  >{{ __('Skip to content', 'welcome.helsinki') }}</a>

  <header class="site__header" id="header">
    @php(do_action('get_header'))
    @include('partials.header')
  </header>

  @if (is_front_page() && is_active_sidebar('front-page-banner'))
    <div class="site__banner">
      @php(dynamic_sidebar('front-page-banner'))
    </div>
  @endif

  <main
    id="main"
    class="site__content"
    @if (get_field('schema_org_is_faq_page'))
      itemscope
      itemtype="https://schema.org/FAQPage"
    @endif
  >
    @yield('content')
  </main>

  <footer class="site__footer">
    @include('partials.footer')
  </footer>

  @include('components.chat')
</div>
