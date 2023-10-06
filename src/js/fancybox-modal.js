import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
// import '../../node_modules/default-passive-events/dist/index' // service module

Fancybox.bind('[data-fancybox]', {
  type: "inline",
  fullScreen: {
    requestOnStart: true,
  },

  Carousel: {
    Navigation: false,
    closeButton: true,
    infinite: false,
  },
  
  on: {
    reveal: data => {
  
      if (!data.container.outerText.includes('Book a tour')) {
        window.document.body.classList.add('body-overflow')
        $('.modal-slider')
          .not('.slick-clone')
          .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            dots: true,
            infinite: true,

            customPaging: function (slider, i) {
              return "<span class='dot'></span>";
            },
          });
      }
    },
    close: data => {
      window.document.body.classList.remove('body-overflow')
      if (!data.container.outerText.includes('Book a tour')) {
        const sliders = document.querySelectorAll('.slick-initialized');

        sliders.forEach(item => {
          $(item).slick('unslick');
        });
        $('.upcoming-card-list').slick({
          arrows: true,
          dots: false,
          infinite: false,
          appendArrows: '.slider-arrows-tourcards',
          prevArrow: '.prev',
          nextArrow: '.next',
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 1440,
              settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 745,
              settings: {
                centerPadding: '20px',
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
        
              }
            },
            {
              breakpoint: 0,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
        
              }
            },
          ]
        })
      }
    },
  },
});
