const yearElement = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

if (yearElement) yearElement.textContent = new Date().getFullYear();

document.querySelectorAll('.profile-photo').forEach((photo) => {
  const markPhotoAsLoaded = () => photo.closest('.portrait-image').classList.add('has-photo');
  photo.addEventListener('load', markPhotoAsLoaded);
  if (photo.complete && photo.naturalWidth > 0) markPhotoAsLoaded();
  photo.addEventListener('error', () => photo.remove());
});

const storedTheme = localStorage.getItem('cv-theme');
if (storedTheme) root.dataset.theme = storedTheme;

const updateThemeLabel = () => {
  const isDark = root.dataset.theme === 'dark';
  themeToggle?.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
  themeToggle?.setAttribute('title', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
};

themeToggle?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('cv-theme', root.dataset.theme);
  updateThemeLabel();
});

updateThemeLabel();
