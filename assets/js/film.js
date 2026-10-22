/* Film player — index.html only.
   Chapter times mirror _video/film.html scene starts (identical for both languages). */
(function () {
  var player = document.querySelector('.player');
  var v = document.getElementById('filmvideo');
  if (!player || !v) return;

  var SRC = {
    en: 'assets/video/jebi-data-engine.mp4',
    zh: 'assets/video/jebi-data-engine.zh.mp4'
  };
  var POSTER = {
    en: 'assets/video/poster.jpg',
    zh: 'assets/video/poster-zh.jpg'
  };
  var lang = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';

  var cover = player.querySelector('.cover');
  var chaps = [].slice.call(document.querySelectorAll('.chap'));

  function play() {
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  cover.addEventListener('click', play);

  // Hero CTA: scroll to the film and start it (user gesture keeps audio allowed).
  [].slice.call(document.querySelectorAll('[data-film-play]')).forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('film').scrollIntoView({ behavior: 'smooth', block: 'start' });
      play();
    });
  });

  // Big cover only at the very start and after the end; native controls appear
  // only while playing so they never overlap the cover label.
  v.addEventListener('play', function () {
    v.setAttribute('controls', '');
    player.classList.add('playing');
  });
  v.addEventListener('ended', function () {
    v.removeAttribute('controls');
    player.classList.remove('playing');
    v.currentTime = 0;
  });

  // Chapter chips: seek + play, and highlight the active chapter.
  chaps.forEach(function (c) {
    c.addEventListener('click', function () {
      v.currentTime = parseFloat(c.getAttribute('data-t')) || 0;
      play();
    });
  });

  v.addEventListener('timeupdate', function () {
    var t = v.currentTime, idx = -1;
    chaps.forEach(function (c, i) {
      if (t >= parseFloat(c.getAttribute('data-t'))) idx = i;
    });
    chaps.forEach(function (c, i) { c.classList.toggle('on', i === idx); });
  });
  v.addEventListener('seeking', function () {
    chaps.forEach(function (c) { c.classList.remove('on'); });
  });

  // Language switch: swap video source + poster. If mid-playback, resume at the
  // same timestamp — both cuts share one timeline.
  function applyLang(next) {
    if (next === lang || !SRC[next]) return;
    lang = next;
    var wasT = v.currentTime || 0;
    var wasPlaying = !v.paused && !v.ended;
    v.src = SRC[lang];
    v.setAttribute('poster', POSTER[lang]);
    if (wasT > 0) {
      var resume = function () {
        v.removeEventListener('loadedmetadata', resume);
        try { v.currentTime = Math.min(wasT, v.duration || wasT); } catch (e) {}
        if (wasPlaying) play();
      };
      v.addEventListener('loadedmetadata', resume);
    }
    v.load();
    if (!wasPlaying) player.classList.remove('playing');
  }
  window.addEventListener('langchange', function (e) {
    applyLang(e && e.detail && e.detail.lang);
  });
})();
