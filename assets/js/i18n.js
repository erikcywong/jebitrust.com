/* JEBI Trust — language switch (EN / 中文)
   Usage: <span class="en">…</span><span class="zh">…</span>
   Blocks work too: <div class="en">…</div><div class="zh">…</div>   */
(function () {
  var KEY = 'jebitrust_lang';
  var root = document.documentElement;

  function apply(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang-btn') === lang);
    });
  }

  var stored;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }
  var lang = stored === 'zh' || stored === 'en' ? stored : 'en';
  apply(lang);

  window.JT_LANG = function () { return root.getAttribute('data-lang') || 'en'; };
  window.JT_SET_LANG = function (l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply(l);
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  };
  window.JT_REFRESH = function () { apply(window.JT_LANG()); };

  /* delegation: works for buttons injected later by chrome.js */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang-btn]');
    if (!b) return;
    e.preventDefault();
    window.JT_SET_LANG(b.getAttribute('data-lang-btn'));
  });

  document.addEventListener('DOMContentLoaded', function () { apply(window.JT_LANG()); });
})();
