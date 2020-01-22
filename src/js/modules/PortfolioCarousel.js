import $ from 'jquery';

class PortfolioCarousel{
  constructor() {
    this.el = $(".portfolio__carousel");
    this.initSlider();
    this.elOffer = $(".portfolio__carousel--offer");
  }

  initSlider() {
    this.el.slick({
    slidesToShow:3,
      autoplay: true,
      lazyload:true,
      nextArrow: '<i class="fa fa-arrow-right"></i>',
      prevArrow: '<i class="fa fa-arrow-left"></i>',
      dots: false,
      responsive:[
        {
        breakpoint:900,
        settings:{
            slidesToShow:2
            }
      },
        {
        breakpoint:530,
        settings:{
          slidesToShow:1
          }
      }
      ]
    });
  }
}

export default PortfolioCarousel;