const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav');

hamburger.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
