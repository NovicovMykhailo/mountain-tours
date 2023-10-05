

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