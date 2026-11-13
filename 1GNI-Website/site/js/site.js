const currentPage = location.pathname.split('/').pop() || 'index.html';
const navItems = [
  ['index.html', 'Главная'],
  ['about.html', 'Об артисте'],
  ['discography.html', 'Дискография'],
  ['music.html', 'Музыка'],
  ['gallery.html', 'Галерея'],
  ['contacts.html', 'Контакты']
];

function renderChrome() {
  const nav = navItems.map(([href, label]) =>
    `<li class="nav-item"><a class="nav-link ${currentPage === href ? 'active' : ''}" href="${href}">${label}</a></li>`
  ).join('');

  document.querySelector('#site-header').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container py-2">
        <a class="navbar-brand" href="index.html">1GNI<span class="brand-dot">.</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Открыть меню">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">${nav}</ul>
        </div>
      </div>
    </nav>`;

  document.querySelector('#site-footer').innerHTML = `
    <footer class="footer">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <span>© ${new Date().getFullYear()} 1GNI. Все права защищены.</span>
        <span>Автор сайта: 1GNI</span>
        <nav class="footer-nav d-flex flex-wrap gap-3" aria-label="Навигация в подвале">
          ${navItems.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')}
        </nav>
      </div>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', renderChrome);
