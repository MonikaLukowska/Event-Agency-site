import 'lazysizes';
import '../css/style.css';
import $ from 'jquery';
import slick from 'slick-carousel';
import MobileMenu from './modules/MobileMenu';
import HeroSlider from './modules/HeroSlider';
import TestimonialsSlider from './modules/TestimonialsSlider';
import PortfolioCarousel from './modules/PortfolioCarousel';

if(module.hot) {
    module.hot.accept()
}

const mobileMenu = new MobileMenu();
const heroSlider = new HeroSlider();
const testimonialsSlider = new TestimonialsSlider();
const portfolioCarousel = new PortfolioCarousel();
alert('helo!')