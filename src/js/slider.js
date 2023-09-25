$(window).on('load', function () {

  $('.modal-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    dots: true,
  
    customPaging: function (slider, i) {
      return "<span class='dot'></span>";
    },
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
  });
});

