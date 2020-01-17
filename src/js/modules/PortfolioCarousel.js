import $ from 'jquery';

class PortfolioCarousel{
  constructor() {
    this.el = $(".portfolio__carousel");
    this.initSlider();
  }

  initSlider() {
    this.el.slick({
    slidesToShow:3,
      autoplay: true,
      arrows: false,
      dots: false
    });
  }
}

export default PortfolioCarousel;