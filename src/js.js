  if (window.matchMedia("(max-width: 1000px)").matches) {
    $(document).ready(function () {
      $('.feedback_one').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<div class="button_left"></div>',
        nextArrow: '<div class="button_right"></div>',
        dotsClass: 'dotted'
      });
    });
  } else {
    $(document).ready(function () {
      $('.feedback_one').slick({
        slidesToShow: 3,
        dots: true,
        prevArrow: '<div class="button_left"></div>',
        nextArrow: '<div class="button_right"></div>',
        dotsClass: 'dotted'
      });
    });
  }