// $('.modal-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   arrows: false,
//   dots: true,

//   customPaging: function (slider, i) {
//     return "<span class='dot'></span>";
//   },
// });

setTimeout(function(){
    $('.slick-cloned [data-fancybox]').each(function(){
        let attr = $(this).attr('data-fancybox');
        $(this).removeAttr('data-fancybox').attr('data-fancybox-trigger',attr);
    });
}, 300);