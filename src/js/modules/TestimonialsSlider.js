import $ from 'jquery';

class TestimonialSlider {
  constructor() {
    this.el = $(".testimonials__slides-container");
    this.initSlider();
  }

  initSlider() {
    this.el.slick({
    slidesToShow:1,
      autoplay: true,
      arrows: false,
      dots: false
    });
  }
}

export default TestimonialSlider;

