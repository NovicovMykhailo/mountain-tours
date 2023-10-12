const arrow = document.querySelector('[data-scroll-to-top');

const amountScrolled = 200;

function handleClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll(e) {
  if (this.scrollY > amountScrolled) {
    arrow.classList.add('visible');
    arrow.addEventListener('click', handleClick);
  } else {
    arrow.classList.remove('visible');
    arrow.removeEventListener('click', handleClick);
  }
}


window.addEventListener('scroll', handleScroll);
arrow.addEventListener('click', handleClick);