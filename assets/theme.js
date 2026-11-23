document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('[data-thumb]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var main = document.querySelector('[data-main-image]');
      if (!main) return;
      main.src = thumb.dataset.src;
      main.srcset = '';
      document.querySelectorAll('[data-thumb]').forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });

  document.querySelectorAll('[data-back]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var ref = document.referrer;
      if (ref && ref.indexOf(location.origin) === 0 && history.length > 1) {
        e.preventDefault();
        history.back();
      }
    });
  });
});
