<div class="wp-block-first-steps-checklist {{ esc_attr($block->classes) }}">
  <div id="first-steps-checklist"></div>
  <script type="text/javascript">
    try {
      window.WelcomeGuide.mount({
        el: '#first-steps-checklist',
        props: {
          pdfBaseUrl: '{{ get_field('pdf_base_url', 'option') }}' || undefined,
          emailBaseUrl: '{{ get_field('email_base_url', 'option') }}' || undefined,
          emailQueryKey: '{{ get_field('email_query_key', 'option') }}' || undefined,
          questions: {!! get_option('options_questions') !!},
          checklist: {!! get_option('options_checklist') !!}
        }
      })
    } catch (err) {
      console.error(err)
      var el = document.getElementById('first-steps-checklist')
      el.style.display = 'none'
    }
  </script>
</div>
