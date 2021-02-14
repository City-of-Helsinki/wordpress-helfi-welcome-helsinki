<div class="site">
  <header class="site__header" id="header">
    @php(do_action('get_header'))
    @include('partials.header')
  </header>

  <main
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
