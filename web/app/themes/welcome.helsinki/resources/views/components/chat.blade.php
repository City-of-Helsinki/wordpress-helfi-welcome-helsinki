<!-- Chat container: -->
<div id="preload" style="display:none;"></div>

<script type="text/javascript">
  var helFiChat_fbly_Oid = '60e2d8007a09a4c8ae5f3e06';
  var fblyIdForHelFi = '61389f47cb5509cbe14bb171';
</script>

<script type="text/javascript">
  // Catch Chat window events:
  document.body.onclick = function (e) {
    e = window.event ? event.srcElement : e.target;
    // close chat click event:
    if (e.className && e.className.indexOf('gwc-chat-icon-iks') != -1) {
      //show survey pop-up after chat?
      if (fblyIdForHelFi) {
        FBLY.open(fblyIdForHelFi);
      }
    }
  };
</script>

<!-- NEW FEEDBACKLY SCRIPT START-->
<script>
  if (fblyIdForHelFi) {
    (function () {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.defer = true;
      s.src = 'https://survey.feedbackly.com/dist/plugin-v4.min.js';
      var e =
        document.getElementsByTagName('body')[0] ||
        document.getElementsByTagName('head')[0];
      e.appendChild(s);
      window._fblyConf = {
        oid: helFiChat_fbly_Oid,
        pth: 'https://survey.feedbackly.com',
        dmn: 'default',
      };
      window.FBLY = window.FBLY || {
        evbuf: []
      };
      window.FBLY.action =
        window.FBLY.action ||
        function (a, b, c) {
          window.FBLY.evbuf.push([a, b, c]);
        };
      [
        'addProperty',
        'clearProperty',
        'setLanguage',
        'open',
        'addMeta',
      ].forEach(function (m) {
        window.FBLY[m] =
          window.FBLY[m] ||
          function (a, c) {
            window.FBLY.evbuf.push([m, a, c]);
          };
      });
    })();
    console.log(
      'DONE: loading main feedbackly script to be available for id:' +
      fblyIdForHelFi
    );
  }
</script>
