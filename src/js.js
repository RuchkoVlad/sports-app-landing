 $('.feedback_one').slick({
    slidesToShow: 3,
    dots: true,
    prevArrow: '<div class="button_left"></div>',
    nextArrow: '<div class="button_right"></div>',
    dotsClass: 'dotted',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
