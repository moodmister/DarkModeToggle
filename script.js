const darkModeToggle = document.getElementById('toggle-dark-mode');

darkModeToggle.addEventListener('click', (ev) => {
  document.body.classList.toggle('darkmode');
});

const ltBg1 = document.getElementById('lt-bg1');
const ltBg2 = document.getElementById('lt-bg2');
const ltFg = document.getElementById('lt-fg');
const dtBg1 = document.getElementById('lt-bg1');
const dtBg2 = document.getElementById('lt-bg2');
const dtFg = document.getElementById('lt-fg');

const rootEl = document.documentElement;

ltBg1.value = window.getComputedStyle(rootEl).getPropertyValue('--lt-bg-color1').toString();
ltBg2.value = window.getComputedStyle(rootEl).getPropertyValue('--lt-bg-color2').toString();
ltFg.value = window.getComputedStyle(rootEl).getPropertyValue('--lt-fg-color').toString();
dtBg1.value = window.getComputedStyle(rootEl).getPropertyValue('--dt-bg-color1').toString();
dtBg2.value = window.getComputedStyle(rootEl).getPropertyValue('--dt-bg-color2').toString();
dtFg.value = window.getComputedStyle(rootEl).getPropertyValue('--dt-fg-color').toString();

ltBg1.addEventListener('change', () => {
  rootEl.style.setProperty('--lt-bg-color1', ltBg1.value);
});
ltBg2.addEventListener('change', () => {
  rootEl.style.setProperty('--lt-bg-color2', ltBg2.value);
});
ltFg.addEventListener('change', () => {
  rootEl.style.setProperty('--lt-fg-color', ltFg.value);
});
dtBg1.addEventListener('change', () => {
  rootEl.style.setProperty('--dt-bg-color1', dtBg1.value);
});
dtBg2.addEventListener('change', () => {
  rootEl.style.setProperty('--dt-bg-color2', dtBg2.value);
});
dtFg.addEventListener('change', () => {
  rootEl.style.setProperty('--dt-fg-color', dtFg.value);
});