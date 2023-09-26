import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  fullScreen: {
    requestOnStart: true,
  },
  customPaging: function (slider, i) {
    return "<span class='dot'></span>";
  },
  on: {
    reveal: data => {
      if (!data.container.outerText.includes('Book a tour')) {
        $('.modal-slider')
          .not('.slick-clone')
          .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            dots: true,
            infinite: false,

            customPaging: function (slider, i) {
              return "<span class='dot'></span>";
            },
          });
      }
    },
    close: (data) => {
    console.log('data', data)
  
      const sliders = document.querySelectorAll('.slick-initialized');

      sliders.forEach(item => {
        $(item).slick('unslick');
      });

      $('.gallery-list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        initialSlide: 4,
        appendArrows: '.slider-arrows',
        prevArrow: '.left',
        nextArrow: '.right',
        focusOnSelect: true,
      });
    },
  },
});
