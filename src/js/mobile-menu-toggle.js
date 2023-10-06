const menuBtn = document.querySelector('.burger-open');
const menu = document.querySelector('.mob-menu');
const heroBox = document.querySelector('.hero-box');
const logo = document.querySelector('.logo');
const backdropMob = document.querySelector('.modal-backdrop');
const links = document.querySelectorAll('[data-links');

function closeMenu(e) {
  e.preventDefault();
  window.document.body.classList.toggle('body-overflow')
  menuBtn.classList.toggle('active');
  heroBox.classList.toggle('active');
  logo.classList.toggle('active');
  menu.classList.toggle('active');
  backdropMob.classList.toggle('active');
}

menuBtn.addEventListener('click', closeMenu);

links.forEach(link => link.addEventListener('click', closeMenu));
