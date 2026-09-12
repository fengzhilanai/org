(() => {
  document.documentElement.classList.add('js-enabled');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menu && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
    };
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveal.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  reveal.forEach((element) => observer.observe(element));
})();
