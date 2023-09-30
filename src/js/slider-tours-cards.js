

$('.upcoming-card-list').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  infinite: false,
  appendArrows: '.slider-arrows-tourcards',
  prevArrow: '.prev',
  nextArrow: '.next',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1440,
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
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
  ]
})