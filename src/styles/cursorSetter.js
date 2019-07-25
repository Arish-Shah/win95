export function cursorSetter(milliseconds) {
  const html = document.querySelector('html');

  html.classList.add('wait');
  setTimeout(() => {
    html.classList.remove('wait');
    html.classList.add('progress');
  }, 300);

  setTimeout(() => {
    html.classList.remove('progress');
  }, milliseconds);
}