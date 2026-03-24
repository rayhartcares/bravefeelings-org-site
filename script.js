/* ═══════════════════════════════════════════════════════════
   BRAVE FEELINGS LAB — script.js
   bravefeelings.com homepage — revised
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────
     1. STICKY HEADER SHADOW
  ─────────────────────────────── */
  var header = document.getElementById('site-header');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }


  /* ─────────────────────────────
     2. MOBILE NAV TOGGLE
  ─────────────────────────────── */
  var toggle = document.getElementById('nav-toggle');
  var nav    = document.getElementById('main-nav');

  if (toggle && nav) {

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close on nav link click
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ─────────────────────────────
     3. SMOOTH SCROLL FOR ANCHORS
  ─────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (!id || id === '#') return;

      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      var headerHeight = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

}());
