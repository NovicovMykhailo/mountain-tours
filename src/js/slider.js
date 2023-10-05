$('.gallery-list').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  initialSlide: 4,
  appendArrows: '.slider-arrows',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: false,

  prevArrow: '.left',
  nextArrow: '.right',
  focusOnSelect: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1440,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
    },
    {
      breakpoint: 745,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,

      }
    },
  ]
})


