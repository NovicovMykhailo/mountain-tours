$('.gallery-list').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  initialSlide: 4,
  appendArrows: '.slider-arrows',
  centerPadding: '20px',
  prevArrow: '.left',
  nextArrow: '.right',
  focusOnSelect: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1440,
    },
    {
      breakpoint: 745,
      settings: {
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 375,
      settings: {
        centerPadding: '20px',
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,

      }
    },
  ]
})


