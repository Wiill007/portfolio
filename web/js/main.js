// Auto-update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth active-link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--clr-text)'
            : '';
        });
    }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));


async function loadComponent(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-section]');
  if (!link) return;

  const section = link.dataset.section;
  loadComponent(section, `../html/${section}.html`);
});