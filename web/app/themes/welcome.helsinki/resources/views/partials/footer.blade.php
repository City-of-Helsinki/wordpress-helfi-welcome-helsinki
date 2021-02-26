<footer class="content-info has-ui-03-background-color has-background">
  <div class="footer">
    <div class="footer__brand">
      @if (mb_substr(get_locale(), 0, 2) === 'sv')
        @svg('images/logo/helsinki-sv.svg', '', ['width' => 67, 'height' => 31])
      @else
        @svg('images/logo/helsinki-fi.svg', '', ['width' => 67, 'height' => 31])
      @endif
      <a href="/" class="footer__name">welcome.helsinki</a>
    </div>
    <div class="footer__banner">@php(dynamic_sidebar('footer-banner'))</div>
    <div class="footer__menu">@php(dynamic_sidebar('footer-menu'))</div>
    <div class="footer__contact">
      <div class="footer__social">
        @php(dynamic_sidebar('footer-contact-social'))
      </div>
      <div class="footer__links">
        @php(dynamic_sidebar('footer-contact-links'))
        <a href="#top">Back to top</a>
      </div>
    </div>
    <div class="footer__fineprint">
      <div class="footer__disclaimers">
        @php(dynamic_sidebar('footer-fineprint-disclaimers'))
      </div>
      <div class="footer__links">
        @php(dynamic_sidebar('footer-fineprint-links'))
      </div>
    </div>
  </div>
</footer>
