import Swiper from 'swiper';
import 'swiper/css';

export const useAboutSlider = () => {
    new Swiper('.hero__slider', {
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 32,
      centeredSlides: false,
      breakpoints: {
        576: {
          slidesPerView: 'auto',
        },
        
      }
    });
  };

  export const useTeamSlider = () => {
    new Swiper('.team__slider', {
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 32,
      centeredSlides: true,
      breakpoints: {
        577: {
          slidesPerView: 'auto',
          centeredSlides: false,
        }
      }
    });
  }