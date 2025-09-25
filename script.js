document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.setAttribute('aria-expanded', String(!expanded));
    });
  }

  const typedElement = document.getElementById('typed-element');
  if (typedElement && window.Typed) {
    new Typed('#typed-element', {
      strings: [
        'building modern web experiences.',
        'shipping delightful frontends.',
        'solving real problems with code.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.toggleAttribute('data-theme');
    });
  }
});