<article @php(post_class())>
  @if ($printPageHeading)
    <header class="entry-header">
      <x-group align="full" background="tram-medium-light">
        @if (function_exists('yoast_breadcrumb'))
          {{ yoast_breadcrumb( '<p id="breadcrumbs" class="alignwide">','</p>' ) }}
        @endif
        <div class="wp-block-columns alignwide">
          <div class="wp-block-column is-vertically-aligned-center title-column">
            <h1 class="entry-title">
              @php(the_title())
            </h1>
          </div>
          <div class="koro koro--pulse white bottom mobile-koro">
          </div>
          <div class="wp-block-column is-vertically-aligned-center image-column">
            @if (get_the_post_thumbnail_url())
              <figure class="wp-block-image size-large">
                @php(the_post_thumbnail('large', ['sizes' => '100vw']))
                @if (get_field('featured_image_caption'))
                  <figcaption>
                    {{ get_field('featured_image_caption') }}
                  </figcaption>
                @endif
              </figure>
            @endif
          </div>
        </div>
      </x-group>
      <div class="koro koro--pulse white bottom desktop-koro">
      </div>
    </header>
  @endif

  <div class="entry-content-and-sidebar">
    <div class="entry-content">
      <x-group align="wide">
        @if (get_the_excerpt())
          <p class="description">
            {{ get_the_excerpt() }}
          </p>
        @endif

        @php(the_content())

      </x-group>
    </div>
    <div class="entry-sidebar">
      @include('partials/entry-meta')
    </div>
  </div>

  <x-group align="full">
    <div class="wp-block-react-share alignwide">
      @include('partials/react-and-share')
    </div>
  </x-group>

  <x-related-content
    :type="$related->type"
    :label="$related->label"
    :query="$related->query"
    :category="$related->category"
  />

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>
</article>
