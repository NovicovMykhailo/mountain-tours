import Splide from '@splidejs/splide';

const btnPrev = document.querySelector('.left');
const btnNext = document.querySelector('.right');

document.addEventListener('DOMContentLoaded', function () {
  let slider = new Splide('.splide', {
    type: 'loop',
    arrows: false,
    perMove: 1,
    start: 0,
    pagination: false,
    trimSpace: false,
    updateOnMove: true,
    snap: true,
    rewind: false,
    mediaQuery: 'min',
    speed: 400,
    gap: '20px',
    mediaQuery: 'min',
    breakpoints: {
      1440: {
        perPage: 2,
        fixedWidth: '575px',
        autowidth: true,
        focus: 'right',
      },
      768: {
        perPage: 2,
        fixedWidth: '354px',
        autowidth: true,
        focus: 'right',
      },
      375: {
        perPage: 3,
        fixedWidth: '280px',
        focus: 'center',
      },
      0: {
        perPage: 3,
        fixedWidth: '90%',
        focus: 'center',
      },
    },
  }).mount();

  btnNext.addEventListener('click', e => {
    slider.go('+1');
  });

  btnPrev.addEventListener('click', e => {
    slider.go('-1');
  });
});
