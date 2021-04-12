<div class="wp-block-first-steps-checklist {{ esc_attr($block->classes) }}">
  <div id="first-steps-checklist">asdf</div>
  <script type="text/javascript">
    try {
      window.WelcomeGuide.mount({
        el: '#first-steps-checklist',
        props: {
          pdfBaseUrl: '/app/themes/welcome.helsinki/dist/pdf'
        }
      })
    } catch (err) {
      console.error(err)
      var el = document.getElementById('first-steps-checklist')
      el.style.display = 'none'
    }
  </script>
</div>
