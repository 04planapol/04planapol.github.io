// Elements
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const printBtn = document.getElementById('printBtn');
const yearEl = document.getElementById('year');
const lastUpdatedEl = document.getElementById('lastUpdated');

// Peu
yearEl.textContent = new Date().getFullYear();
lastUpdatedEl.textContent = new Date().toLocaleDateString();

// Tema clar/fosc
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.ariaPressed = String(!isDark);
  });
}

// Imprimir/guardar PDF
if (printBtn) printBtn.addEventListener('click', () => window.print());

// Accessibilitat: focus al títol quan vas amb la barra de dalt
document.querySelectorAll('.quick-nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      setTimeout(() => {
        const h = target.querySelector('h2, h1') || target;
        h.setAttribute('tabindex', '-1');
        h.focus({ preventScroll: true });
        setTimeout(() => h.removeAttribute('tabindex'), 300);
      }, 350);
    }
  });
});

// Navegació: marca actiu el xip de la secció visible
const sections = document.querySelectorAll('main section[id]');
const navLinks = [...document.querySelectorAll('.quick-nav a')];

if (sections.length && navLinks.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const id = e.target.id;
      const link = navLinks.find(a => a.getAttribute('href') === `#${id}`);
      if (!link) return;
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
}
