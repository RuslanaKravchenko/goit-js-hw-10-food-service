const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');

switchRef.addEventListener('change', onChange);

function switchIsCheck() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    switchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}
switchIsCheck();

function onChange() {
  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}
