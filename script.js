const darkModeToggle = document.getElementById('toggle-dark-mode');

darkModeToggle.addEventListener('click', (ev) => {
  document.body.classList.toggle('darkmode');
})