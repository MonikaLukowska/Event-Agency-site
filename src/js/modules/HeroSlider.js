import $ from 'jquery';

class HeroSlider {
  constructor() {
    this.el = $(".hero-slider__container");
    this.initSlider();
  }

  initSlider() {
    this.el.slick({
    slidesToShow:1,
      autoplay: true,
      arrows: false,
      dots: false,
      fade: true,
      cssEase:'linear',
      pauseOnHover: true,
      mobileFirst:true,
      
    });
  }
}

export default HeroSlider;