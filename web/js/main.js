// Load saved language or default to EN
let translations = {};
async function loadLanguage(lang) {
    const res = await fetch(`js/i18n/${lang}.json`);
    translations = await res.json();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[key]) el.textContent = translations[key];
    });
    localStorage.setItem('lang', lang);
}
loadLanguage(localStorage.getItem('lang') || 'en');

// Lang toggle function
document.getElementById('lang-toggle').addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'en';
    loadLanguage(current === 'en' ? 'es' : 'en');
});

// Space for subcomponent rendering
const content = document.getElementById('ComponentRenderer');
async function loadComponent(section) {
    const res = await fetch(`html/${section}.html`);
    content.innerHTML = await res.text();
}

// Function to load subcompoennts
const links = document.querySelectorAll('.nav__links a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(l => {
            l.classList.remove('active');
            l.removeAttribute('aria-current');
        });

        link.classList.add('active');
        link.setAttribute('aria-current', 'page');

        loadComponent(link.dataset.section);
    });
});

// Load default view
loadComponent('1.Bio');